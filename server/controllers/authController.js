// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
import { hashPassword, comparePassword } from '../utils/password.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
// import prisma from '../prisma/client.js';

// const prisma = require("../prisma/client.js");

// REGISTER
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;


  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

    if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }


    const hashedPassword = hashPassword(password);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });


    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// LOGIN


const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = comparePassword(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  res.json({ token });
};

export default {login, register}