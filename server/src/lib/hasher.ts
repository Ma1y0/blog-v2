import bcrypt from "bcrypt"

const hasher = async (password: any) => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export {
    hasher
}