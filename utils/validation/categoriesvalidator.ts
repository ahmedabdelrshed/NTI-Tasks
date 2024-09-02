import { check } from "express-validator";
import validatorMiddleware from "../../middleware/validatorMiddleware";
import { RequestHandler } from "express";
import subCategoriesModel from "../../models/subCategoriesModel";
import { ISubCategories } from "../../interfaces/subcategories";
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
    check("id").isMongoId().withMessage("Invalid MongoId")
        .custom(async (val) => {
            const subcategories = await subCategoriesModel.find({ category: val });
            // bulkwrite
            if (subcategories.length > 0) {
                // TODO: less performance
                // subcategories.map(async (subcategory: ISubCategories) => {
                //     await subCategoriesModel.findByIdAndDelete(subcategory._id)
                // })

                // * bulkWrite more performance
                const bulkOption = subcategories.map((subcategory: ISubCategories) => ({
                    deleteOne: { filter: { _id: subcategory._id } }
                }))
                await subCategoriesModel.bulkWrite(bulkOption)
            }
            return true;
        }),
    validatorMiddleware,
];

