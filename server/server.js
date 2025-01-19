import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// const app = express();

const PORT = process.env.PORT || 8080;

// Define CORS options
const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(cookieParser());

// Routes here
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
