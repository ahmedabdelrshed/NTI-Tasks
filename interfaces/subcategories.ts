import { Schema } from "mongoose";

export interface ISubCategories{
    name: string;
    category: Schema.Types.ObjectId;
}