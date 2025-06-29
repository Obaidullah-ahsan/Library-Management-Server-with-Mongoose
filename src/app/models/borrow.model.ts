import { model, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interfaces";


const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, required: true },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"],
    },
    dueDate: { type: Date, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const Borrow = model("Borrow", borrowSchema)