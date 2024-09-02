import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/categories";
import subcategoriesRoute from "./subcategoriesRoute";

const categoriesRoute: Router = Router()
categoriesRoute.use('/:categoryId/subcategories', subcategoriesRoute);
categoriesRoute.post('/add', createCategory)
categoriesRoute.get('/', getCategories)
categoriesRoute.route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory)
export default categoriesRoute