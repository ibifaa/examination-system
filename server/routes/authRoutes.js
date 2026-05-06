// const express = require('express');
// const router = express.Router();

import express from "express";

const router = express.Router();
import authController from "../controllers/authController.js"

// const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;