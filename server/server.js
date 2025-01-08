import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(cookieParser());

// Routes here
app.use("/api/v1/user", userRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
