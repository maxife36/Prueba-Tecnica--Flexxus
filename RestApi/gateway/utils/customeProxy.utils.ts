
import { ExternalApiError, ExternalserviceError } from "../src/handlers/errors/ExternalApiError";
import { HttpStatusCode, SuccessMessage } from "../src/handlers/enums";
import { responseHandler, SuccessResponse } from "../src/handlers/responseHandler";
import { Request, Response, NextFunction } from "express";



class customeProxy {
    private route: string;
    private port:number;
    public readonly on : () => (req: Request, res: Response, next: NextFunction) => Promise<void>
  
    constructor(route: string, port:number) {
      this.route = route;
      this.port = port;
      this.on = this.middleware;
    }
  
    public middleware() {
      return async (req: Request, res: Response, next: NextFunction) => {
        try {
          const apiUrl = `http://localhost:${this.port}${req.originalUrl.replace(`${this.route}`, "")}`;
          console.log(apiUrl);
          
          const response = await fetch(apiUrl, {
            method: req.method,
            headers: {
              "Content-Type": "application/json",
              "Cookie": customeProxy.attachCookies(req)
            },
            body: req.method === "GET" ? undefined : JSON.stringify(req.body),
          });
          
          if (!response.ok) {
            const errorData: ExternalserviceError = await response.json();
            throw new ExternalApiError(errorData);
          }
  
          const user: SuccessResponse = await response.json();
          return responseHandler(res, user, HttpStatusCode.CREATED, {
            message: SuccessMessage.RESOURCE_CREATED,
          });
        } catch (error) {
          next(error);
        }
      };
    }
  
    private static attachCookies(req: Request): string {
      const cookies = req.cookies;
      return Object.entries(cookies)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    }
  }

export default customeProxy