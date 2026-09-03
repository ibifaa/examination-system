
import express from "express";

const router = express.Router();

import examController from "../controllers/examController.js";


router.post('/fetchQuestions', examController.fetchQuestions);



export default router;