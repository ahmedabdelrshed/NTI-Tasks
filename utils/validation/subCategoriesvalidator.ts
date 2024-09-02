import { body, check } from "express-validator";
import validatorMiddleware from "../../middleware/validatorMiddleware";
import { RequestHandler } from "express";
import categoriesModel from "../../models/categoriesModel";
export const getSubCategoryValidator: RequestHandler[] = [
    check("id").isMongoId().withMessage("Invalid MongoId"),
    validatorMiddleware,
];

export const createSubCategoryValidator: RequestHandler[] = [
    check("name").notEmpty().withMessage("Name of Subcategory is Empty")
        .isLength({ min: 5, max: 50 }).withMessage("Name of Subcategory must be between 5 and 50 characters"),
    check("category").notEmpty().isMongoId().withMessage("Invalid MongoId")
        .custom(async (val) => {
            const category = await categoriesModel.findById(val);
            if (!category) {
                throw new Error('Category Not Found');
            }
            return true;
        }),
    validatorMiddleware,
];

export const updateSubCategoryValidator: RequestHandler[] = [
    check("name").optional()
        .isLength({ min: 5, max: 50 }).withMessage("Name of Subcategory must be between 5 and 50 characters"),
    check("category").optional().isMongoId().withMessage("Invalid MongoId"),
    validatorMiddleware,
];

export const deleteSubCategoryValidator: RequestHandler[] = [
    check("id").isMongoId().withMessage("Invalid MongoId"),
    validatorMiddleware,
];

