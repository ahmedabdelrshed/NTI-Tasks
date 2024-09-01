import { NextFunction, Request, RequestHandler, Response } from "express";
import { query, validationResult } from 'express-validator';

const validatorMiddleware:RequestHandler = ( req:Request, res:Response, next:NextFunction)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
export default validatorMiddleware