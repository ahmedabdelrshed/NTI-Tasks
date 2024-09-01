import { NextFunction, Request, Response } from "express";
import { ICustomError } from "../interfaces/customError";

export  const globalError = (err: ICustomError, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'Error'

    res.status(err.statusCode).json({
        error: err,
        message: err.message,
        statusCode: err.statusCode,
        status: err.status,
        stack: err.stack
    })
}