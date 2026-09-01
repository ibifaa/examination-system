import express from "express"

// import dashboard  from "../controllers/userController";

import authController from "../controllers/authController.js";
import authenticate from "../middlewares/authenticate.js";
import userController from "../controllers/userController.js";



const router = express.Router()




router.get( '/dashboard',  authenticate, userController.getDashboard);

export default router;