import { NextFunction, Request, Response } from "express";
import { ISubCategories } from "../interfaces/subcategories";
import { FilterData } from "../interfaces/filterData";
import subCategoriesModel from "../models/subCategoriesModel";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandler";

export const filterData = (req: Request, res: Response, next: NextFunction) => {
    let filterData: FilterData = {};
    if (req.params.categoryId) { filterData.category = req.params.categoryId };
    req.filterData = filterData;
    next();
}

export const createSubcategory = createOne<ISubCategories>(subCategoriesModel)
export const getSubcategories = getAll<ISubCategories>(subCategoriesModel, 'subcategories')
export const getSubcategory = getOne<ISubCategories>(subCategoriesModel)
export const updateSubcategory = updateOne<ISubCategories>(subCategoriesModel)
export const deleteSubcategory = deleteOne<ISubCategories>(subCategoriesModel)