

import express from "express";

const router = express.Router();
import authController from "../controllers/authController.js"
import { verifyEmail } from "../controllers/verifyEmail.js";


router.post('/register', authController.register);
router.post('/login', authController.login);
router.get(  "/verify-email/:token",  verifyEmail);

export default router;