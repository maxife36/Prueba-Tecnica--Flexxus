import {Request, Response,NextFunction} from "express";

const attachCookiesMiddleware = (req:Request, res:Response, next: NextFunction) => {
    const cookies = req.cookies; 
    const cookieArray = Object.entries(cookies) 
        .map(([key, value]) => `${key}=${value}`) 
        .join('; '); 

    if (cookieArray) {
        req.headers['Cookie'] = cookieArray; 
    }
    next();
};

export default attachCookiesMiddleware