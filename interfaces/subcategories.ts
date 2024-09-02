import { Document, Schema } from "mongoose";

export interface ISubCategories extends Document {
    name: string;
    category: Schema.Types.ObjectId;
}