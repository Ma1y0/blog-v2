import { Router } from "express"
import prisma from "../prisma"

const router = Router()

// Get all Posts
router.get("/", async (req, res) => {
    const posts = await prisma.post.findMany()
    res.json(posts)
})

// Get Post by Id
router.get("/:id", async (req, res) => {
    const { id } = req.params
    const post = await prisma.post.findFirst({
        where: {
            id: id
        }
    })
    res.json(post)
})

// Create new Post
router.post("/", async (req, res) => {
    const body = req.body
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            author: {
                connect: {
                  id: body.authorId
                }
            }
        }
    })

    res.json(post)
})

// Update Post
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const body = req.body
    const post = await prisma.post.update({
        where: {
            id: id
        },
        data: body
    })

    res.json({
        post
    })
})

// Delete Post
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const post = await prisma.post.delete({
        where: {
            id: id
        }
    })

    res.json(post)
})

export {
    router as postRouter
}