import express, {Request, Response,NextFunction} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { createProxyMiddleware, Options } from "http-proxy-middleware";
import ServiceAuthMiddleware from "./src/auth/middlewares/serviceAuth.middleware";
import attachCookiesMiddleware from "middlewares/attachCookies.middleware";

dotenv.config();

const PORT = process.env.GATEWAY_CONTAINER_PORT ?? 3000;
const ACCOUNT_PORT = process.env.ACCOUNT_CONTAINER_PORT ?? 3001;
const DATABASE_PORT = process.env.DATABASE_CONTAINER_PORT ?? 3003;

const AuthService = new ServiceAuthMiddleware("gateway", []);

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(AuthService.serviceSignature);


app.use(attachCookiesMiddleware)

app.use(
  "/account",
  createProxyMiddleware({
    target: `http://account:${ACCOUNT_PORT}`,
    changeOrigin: true,
  })
);

app.use(
  "/database",
  createProxyMiddleware({
    target: `http://database:${DATABASE_PORT}`,
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Gateway microservice up on port ${PORT}`);
});
