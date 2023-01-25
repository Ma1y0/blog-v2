import express from "express"
import * as dotenv from "dotenv"
import { postRouter } from "./routes/postRoutes"

dotenv.config()
const app = express()

app.use(express.json())

app.use("/post", postRouter)

app.listen(8080, () => console.log("App is listenig on port 8080"))