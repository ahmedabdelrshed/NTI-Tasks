import { check } from "express-validator";
import validatorMiddleware from "../../middleware/validatorMiddleware";
import { RequestHandler } from "express";
export const getCategoryValidator: RequestHandler[] = [
    check("id").isMongoId().withMessage("Invalid MongoId"),
    validatorMiddleware,
];

export const createCategoryValidator: RequestHandler[] = [
    check("name").notEmpty().withMessage("Name of Category is Empty")
        .isLength({ min: 5, max: 50 }).withMessage("Name of category must be between 5 and 50 characters"),
    validatorMiddleware
];

export const updateCategoryValidator: RequestHandler[] = [
    check("name").notEmpty().withMessage("Name of Category is Empty")
        .isLength({ min: 5, max: 50 }).withMessage("Name of category must be between 5 and 50 characters"),
    validatorMiddleware
];

export const deleteCategoryValidator: RequestHandler[] = [
    check("id").isMongoId().withMessage("Invalid MongoId"),
    validatorMiddleware,
];

