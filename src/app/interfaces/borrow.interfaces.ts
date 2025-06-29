import { Types } from "mongoose";

export interface borrow {
    book : Types.ObjectId
    quantity : number
    dueDate : Date
}