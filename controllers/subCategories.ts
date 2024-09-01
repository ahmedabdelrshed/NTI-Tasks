import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler"
import { ISubCategories } from "../interfaces/subcategories";
import subCategoriesModel from "../models/subCategoriesModel";
import ApiErrors from "../utils/apiErrors";
export const createSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subcategory: ISubCategories = await subCategoriesModel.create(req.body);
    res.status(201).json({ data: subcategory })
})

export const getSubCategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subcategories: ISubCategories[] = await subCategoriesModel.find();
    res.json({ data: subcategories })
})

export const getSubCategoryById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subcategory = await subCategoriesModel.findById(req.params.id)
    if (!subcategory) {
        return next(new ApiErrors('SubCategory not found', 404))
    }
    res.status(200).json({ data: subcategory })
})

export const updateSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subcategory = await subCategoriesModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!subcategory) {
        return next(new ApiErrors('SubCategory not found', 404))
    }
    res.status(200).json({ data: subcategory })
})

export const deleteSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subcategory = await subCategoriesModel.findByIdAndDelete(req.params.id)
    if (!subcategory) {
        return next(new ApiErrors('SubCategory not found', 404))
    }
    res.status(204).send()
})