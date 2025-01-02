import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";

dotenv.config();
const port = process.env.PORT || 3000; 
const URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json()); 
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));


app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
