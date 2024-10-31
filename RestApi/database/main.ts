import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import ArticleRoutes from "./src/routes/article.routes";
import userRoutes from "./src/routes/user.route";
import errorHandler from "./src/handlers/errorHandler";
import ServiceAuthMiddleware from "./src/auth/middlewares/serviceAuth.middleware";
import LoggedAuth from "./src/auth/middlewares/userLogged.middleware";

dotenv.config();

const PORT = process.env.DATABASE_CONTAINER_PORT ?? 3003;

const AuthService = new ServiceAuthMiddleware("database", ["account"])
const accountAuth = AuthService.authMiddlewares.account

const app = express();

app.use(express.json())
app.use(cookieParser());


app.use("/api/articles", LoggedAuth,  ArticleRoutes);
app.use("/api/users", accountAuth ,userRoutes);

app.use(AuthService.serviceSignature)

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Database microservice up on port ${PORT}`);
});
