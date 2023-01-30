import cors from "cors"
import express from "express"
import debugLogger from "./middleware/debug"
import * as dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import { postRouter } from "./routes/postRoutes"
import { userRouter } from "./routes/userRoutes"

dotenv.config()
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(debugLogger) 

// Router
app.use("/post", postRouter)
app.use("/user", userRouter)

app.listen(8080, () => console.log("App is listenig on port 8080"))