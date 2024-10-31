import express from "express";
import dotenv from "dotenv";
import ArticleRoutes from "./src/routes/article.routes";
import userRoutes from "./src/routes/user.route";
import errorHandler from "./src/handlers/errorHandler";

dotenv.config();

const PORT = process.env.DATABASE_CONTAINER_PORT ?? 3003;

const app = express();

app.use(express.json())

app.use("/api/articles", ArticleRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Database microservice up on port ${PORT}`);
});
