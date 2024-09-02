import { Schema, model } from "mongoose";
import { ISubCategories } from "../interfaces/subcategories";

const SubcategoriesSchema: Schema = new Schema<ISubCategories>({
    name: { type: String, required: true, unique: true, trim: true },
    category: { type: Schema.Types.ObjectId, required: true, ref: 'categories' }
}, { timestamps: true });

SubcategoriesSchema.pre<ISubCategories>(/^find/, function (next) {
    this.populate({ path: 'category', select: 'name' })
    next()
})




export default model<ISubCategories>('subcategories', SubcategoriesSchema)

