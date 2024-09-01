import { Application } from "express";
import categoriesRoute from "./categoriesRoutes";
import subcategoriesRoute from "./subcategoriesRoute";
import { NextFunction, Request, Response } from "express";
import ApiErrors from "../utils/apiErrors";
import { globalError } from "../middleware/globalError";

const mountRoutes = (app: Application): void => {
    app.use('/api/categories', categoriesRoute)
    app.use('/api/subcategories', subcategoriesRoute)
    app.all('*', (req: Request, res: Response, next: NextFunction) => {
        next(new ApiErrors(`The request ${req.originalUrl} not found`, 400))
    })
    app.use(globalError)
}

export default mountRoutes;