import * as jwt from "jsonwebtoken"

const generateToken = (payload: any) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "30d" })
}

export {
    generateToken
}