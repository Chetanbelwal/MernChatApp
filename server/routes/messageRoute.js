import express from "express";
import {sendMessage, getMessage} from "../controllers/messageController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/send/:id").post(authMiddleware, sendMessage);
router.route("/:id").get(authMiddleware, getMessage);

export default router;