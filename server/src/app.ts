import cors from "cors"
import express from "express"
import * as dotenv from "dotenv"
import { postRouter } from "./routes/postRoutes"

dotenv.config()
const app = express()

const debugLogger = (req: { method: any; url: any }, res: any, next: () => void) => {
    console.log(`${req.method} url:: ${req.url}`)
    next()
}

// Middlewares
app.use(cors())
app.use(express.json())
app.use(debugLogger) 

// Router
app.use("/post", postRouter)

app.listen(8080, () => console.log("App is listenig on port 8080"))