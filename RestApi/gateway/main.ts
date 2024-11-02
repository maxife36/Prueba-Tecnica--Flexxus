import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ServiceAuthMiddleware from "./src/auth/middlewares/serviceAuth.middleware";
import errorHandler from "./src/handlers/errorHandler";
import customeProxy from "./utils/customeProxy.utils";

import path from 'path';

dotenv.config({ path: path.resolve( '../.env') });;

const PORT = process.env.GATEWAY_HOST_PORT ?? 3000;
const ACCOUNT_PORT = process.env.ACCOUNT_HOST_PORT ?? 3002;
const DATABASE_PORT = process.env.DATABASE_HOST_PORT ?? 3306;
const ARTICLE_PORT = process.env.ARTICLE_HOST_PORT ?? 3306;

const AuthService = new ServiceAuthMiddleware("gateway", []);

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(AuthService.serviceSignature);


const accountProxy = new customeProxy("/account", Number(ACCOUNT_PORT))
app.use("/account", accountProxy.on());

const databaseProxy = new customeProxy("/database", Number(DATABASE_PORT))
app.use("/database", databaseProxy.on());

const articleProxy = new customeProxy("/article", Number(ARTICLE_PORT))
app.use("/article", articleProxy.on());

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Gateway microservice up on port ${PORT}`);
});
