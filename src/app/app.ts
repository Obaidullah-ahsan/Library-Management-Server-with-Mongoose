import express, { Application, Request, Response } from "express"

export const app : Application = express()

// Middleware
app.use(express.json())


app.get("/", (req : Request, res: Response)=>{
    res.send("Library Management Server with Mongoose is Running")
})