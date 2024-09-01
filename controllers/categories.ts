import { NextFunction, Request, Response } from "express";
import categoriesModel from "../models/categoriesModel";
import { ICategories } from "../interfaces/categories";
import asyncHandler from "express-async-handler"
import ApiErrors from "../utils/apiErrors";
export const createCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const category: ICategories = await categoriesModel.create(req.body);
    res.status(201).json({ data: category })
})

export const getCategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const categories: ICategories[] = await categoriesModel.find();
    res.json({ data: categories })
})

export const getCategoryById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const category = await categoriesModel.findById(req.params.id)
    if (!category) {
        return next(new ApiErrors('Category not found', 404))
    }
    res.status(200).json({ data: category })
})

export const updateCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const category = await categoriesModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!category) {
        return next(new ApiErrors('Category not found', 404))
    }
    res.status(200).json({ data: category })
})

export const deleteCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const category = await categoriesModel.findByIdAndDelete(req.params.id)
    if (!category) {
        return next(new ApiErrors('Category not found', 404))
    }
    res.status(204).send()
})