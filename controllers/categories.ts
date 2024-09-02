import categoriesModel from "../models/categoriesModel";
import { ICategories } from "../interfaces/categories";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandler";
export const createCategory = createOne<ICategories>(categoriesModel)
export const getCategories = getAll<ICategories>(categoriesModel, 'categories')
export const getCategory = getOne<ICategories>(categoriesModel)
export const updateCategory = updateOne<ICategories>(categoriesModel)
export const deleteCategory = deleteOne<ICategories>(categoriesModel)