import { Router } from "express";
import { createSubCategory, deleteSubCategory, getSubCategories, getSubCategoryById, updateSubCategory } from "../controllers/subCategories";
import { createSubCategoryValidator, deleteSubCategoryValidator, getSubCategoryValidator, updateSubCategoryValidator } from "../utils/validation/subCategoriesvalidator";

const subcategoriesRoute: Router = Router()
subcategoriesRoute.post('/add', createSubCategoryValidator, createSubCategory)
subcategoriesRoute.get('/', getSubCategories)
subcategoriesRoute.route('/:id')
    .get(getSubCategoryValidator, getSubCategoryById)
    .put(updateSubCategoryValidator, updateSubCategory)
    .delete(deleteSubCategoryValidator, deleteSubCategory)
export default subcategoriesRoute