import { Schema, model } from "mongoose";
import { ICategories } from "../interfaces/categories";

const categoriesSchema: Schema = new Schema<ICategories>({
    name: { type: String, required: true, unique: true, trim: true },
}, { timestamps: true })
export default model<ICategories>('categories',categoriesSchema)
