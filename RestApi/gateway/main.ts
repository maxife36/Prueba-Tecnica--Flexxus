import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import axios from "axios"; // Importa axios
import ServiceAuthMiddleware from "./src/auth/middlewares/serviceAuth.middleware";
import attachCookiesMiddleware from "./utils/attachCookies.utils";
import errorHandler from "./src/handlers/errorHandler";
import { ExternalApiError, ExternalserviceError } from "./src/handlers/errors/ExternalApiError";
import { HttpStatusCode, SuccessMessage } from "./src/handlers/enums";
import { responseHandler, SuccessResponse } from "./src/handlers/responseHandler";
import customeProxy from "./utils/customeProxy.utils";

import path from 'path';

dotenv.config({ path: path.resolve( '../.env') });;

const PORT = process.env.GATEWAY_HOST_PORT ?? 3000;
const ACCOUNT_PORT = process.env.ACCOUNT_HOST_PORT ?? 3002;
const DATABASE_PORT = process.env.DATABASE_HOST_PORT ?? 3306;

const AuthService = new ServiceAuthMiddleware("gateway", []);

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(AuthService.serviceSignature);


const accountProxy = new customeProxy("/account", Number(ACCOUNT_PORT))
app.use("/account", accountProxy.on());

const databaseProxy = new customeProxy("/database", Number(DATABASE_PORT))
app.use("/database", databaseProxy.on());

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Gateway microservice up on port ${PORT}`);
});
