import * as jwt from "jsonwebtoken"

const generateToken = (payload: any) => {
    return jwt.sign(payload, process.env.token_secret, { expiresIn: "30d" })
}

export {
    generateToken
}