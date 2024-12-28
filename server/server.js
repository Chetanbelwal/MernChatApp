import express from 'express';
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config({path: "./.env"});

const app = express();

const PORT = process.env.PORT;

app.get("/favicon.ico", (req, res) => {
    res.status(204).end(); // No Content
});


app.get("/", (req, res) => {
    res.send("API is running");
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
