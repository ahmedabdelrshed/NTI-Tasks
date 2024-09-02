import { Router } from "express";
import { createSubCategoryValidator, deleteSubCategoryValidator, getSubCategoryValidator, updateSubCategoryValidator } from "../utils/validation/subCategoriesvalidator";
import { createSubcategory, deleteSubcategory, getSubcategories, getSubcategory, updateSubcategory } from "../controllers/subCategories";

const subcategoriesRoute: Router = Router({ mergeParams: true });
subcategoriesRoute.post('/add', createSubCategoryValidator, createSubcategory)
subcategoriesRoute.get('/', getSubcategories)
subcategoriesRoute.route('/:id')
    .get(getSubCategoryValidator, getSubcategory)
    .put(updateSubCategoryValidator, updateSubcategory)
    .delete(deleteSubCategoryValidator, deleteSubcategory)
export default subcategoriesRoute