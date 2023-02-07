import express from "express"
import prisma from "../prisma"
import bcrypt from "bcrypt"
import { expressjwt } from "express-jwt"
import { hasher } from "../lib/hasher"
import { generateToken } from "../lib/jwt"

const router = express.Router()
const secret = process.env.TOKEN_SECRET
const authenticateJWT = expressjwt({ secret, algorithms: ['HS256'] })

// Test route
router.get("/protected", authenticateJWT, (req, res) => {
    res.json("hello")
})

// Login
router.post("/login", async (req, res)  => {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (passwordMatch) {
        const accessToken = generateToken({ userId: user.id })
        res.json({ accessToken, user })
    } else {
        res.status(401).json({
            message: "Incorect Password"
        })
    }
})

// Sing Up
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await hasher(password)

    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        })

        const accessToken = generateToken({ userId: user.id })

        res.json({
            user: user,
            accessToken
        })
    } catch (err) {
        res.status(401).json(err)
    }

})

export {
    router as userRouter
}