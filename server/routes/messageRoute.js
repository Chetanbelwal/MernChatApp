import express from "express";
import {sendMessage} from "../controllers/messageController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/send/:id").post(authMiddleware, sendMessage);

export default router;