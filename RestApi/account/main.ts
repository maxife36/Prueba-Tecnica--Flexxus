import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import errorHandler from "./src/handlers/errorHandler"
import authRoute from "./src//routes/auth.routes"
import ServiceAuthMiddleware from "./src/auth/middlewares/serviceAuth.middleware";

dotenv.config()

const PORT = process.env.AUTH_CONTAINER_PORT ?? 3001

const AuthService = new ServiceAuthMiddleware("account", [])

const app = express()

app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoute)

app.use(AuthService.serviceSignature)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`account microservice up on port ${PORT}`);
})
