import express, { Request, Response } from "express";
import { Books } from "../models/book.model";

export const bookRouter = express.Router();

bookRouter.get("/", async (req: Request, res: Response) => {
  const { filter: genre, sortBy, limit } = req.query;
  let filter: any = {};
  if (genre) {
    filter.genre = genre;
  }
  const parsedLimit = limit ? parseInt(limit as string) : 10;
  const sortCondition: any = {};
  if (sortBy) {
    sortCondition[sortBy as string] = 1; // ascending
  }
  const data = await Books.find(filter).sort(sortCondition).limit(parsedLimit);
  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data,
  });
});
bookRouter.get("/:bookId", async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const data = await Books.findById(bookId);
  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data,
  });
});
bookRouter.put("/:bookId", async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const body = req.body;
  const data = await Books.findByIdAndUpdate(bookId, body, { new: true });
  res.status(201).json({
    success: true,
    message: "Book updated successfully",
    data,
  });
});
bookRouter.delete("/:bookId", async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const data = await Books.findByIdAndDelete(bookId);
  res.status(201).json({
    success: true,
    message: "Book deleted successfully",
    data: null,
  });
});

bookRouter.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Books.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error,
    });
  }
});
