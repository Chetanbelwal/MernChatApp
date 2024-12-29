import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT|| 5000;

app.get("/favicon.ico", (req, res) => {
  res.status(204).end(); // No Content
});


// Routes here
app.use("/api/v1/user", userRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
