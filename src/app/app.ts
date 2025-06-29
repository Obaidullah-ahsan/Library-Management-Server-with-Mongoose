import express, { Application, Request, Response } from "express"
import { bookRouter } from "./controllers/book.controller"
import { borrowRouter } from "./controllers/borrow.controller"


export const app : Application = express()

// Middleware
app.use(express.json())
app.use("/books", bookRouter)
app.use("/borrow", borrowRouter)


app.get("/", (req : Request, res: Response)=>{
    res.send("Library Management Server with Mongoose is Running")
})