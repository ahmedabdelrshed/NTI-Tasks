import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/categories";

const categoriesRoute: Router = Router()
categoriesRoute.post('/add', createCategory)
categoriesRoute.get('/', getCategories)
categoriesRoute.route('/:id')
    .get(getCategoryById)
    .put(updateCategory)
    .delete(deleteCategory)
export default categoriesRoute