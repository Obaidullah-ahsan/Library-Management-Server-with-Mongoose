"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_model_1 = require("../models/book.model");
const borrow_model_1 = require("../models/borrow.model");
exports.borrowRouter = express_1.default.Router();
exports.borrowRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const borrow = req.body;
    const bookId = borrow.book;
    const orderQuantity = borrow.quantity;
    const data = yield book_model_1.Books.findById(bookId);
    if (data && typeof data.copies === "number" && orderQuantity <= data.copies) {
        try {
            const data = yield borrow_model_1.Borrow.create(borrow);
            res.status(201).json({
                success: true,
                message: "Book borrowed successfully",
                data,
            });
            // Update the book's available copies
            yield book_model_1.Books.findByIdAndUpdate(bookId, { $inc: { copies: -orderQuantity } });
        }
        catch (error) {
            res.status(400).json({
                message: "Validation failed",
                success: false,
                error,
            });
        }
    }
    else {
        // Handle the case where the book is not found or copies is undefined
        res.status(400).json({
            success: false,
            message: "Invalid book or insufficient copies.",
        });
    }
}));
