import express, { Application, Request, Response } from "express";
import { bookRouter } from "./app/controllers/book.controller";
import { borrowRouter } from "./app/controllers/borrow.controller";


export const app: Application = express();

// Middleware
app.use(express.json());
app.use("/api/books", bookRouter);
app.use("/api/borrow", borrowRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Library Management Server with Mongoose is Running");
});
