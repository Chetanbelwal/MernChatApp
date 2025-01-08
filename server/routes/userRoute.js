import express from "express";
const router = express.Router();

import {register, login, logout, getOtherUsers}  from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/getOtherUsers").get(authMiddleware, getOtherUsers);

export default router;