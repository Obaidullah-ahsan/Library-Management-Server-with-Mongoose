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
  // This route can be used to fetch all books or search/filter them
  const data = await Books.find(filter).sort(sortCondition).limit(parsedLimit);
  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data,
  });
});

bookRouter.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Books.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error,
    });
  }
});
