import { Server } from "http";
import { app } from "./app";
import mongoose from "mongoose";

let server: Server;
const PORT = 5000;

async function Main() {
  try {
    await mongoose.connect(
      "mongodb+srv://todosAppDb:todosAppDb@cluster0.zkk0rbw.mongodb.net/Library-Management-Server?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB usuing Mongoose");
    server = app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

Main();
