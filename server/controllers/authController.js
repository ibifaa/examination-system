import { hashPassword, comparePassword } from '../utils/password.js';
import jwt from "jsonwebtoken";
import prisma from '../prisma/client.js';
import { generateVerificationToken, generateTokenExpiry } from '../services/tokenServices.js';
import crypto from "crypto";
import { sendVerificationEmail } from '../services/emailServices.js';

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "Email, password, and username are required." });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedUsername = username.trim();

    // Check if user already exists by email or username
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: normalizedEmail },
          { username: trimmedUsername }
        ]
      },
    });

    if (existingUser) {
      if (existingUser.email === normalizedEmail) {
        return res.status(400).json({ message: "Email is already registered" });
      }
      return res.status(400).json({ message: "Username is already taken" });
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // create user
    const user = await prisma.user.create({
      data: {
        username: trimmedUsername,
        email: normalizedEmail,
        password: hashedPassword,
        role: "user",
      },
    });

    // delete old verification tokens
    await prisma.emailVerificationToken.deleteMany({
      where: { userId: user.id },
    });

    // raw token
    const rawToken = generateVerificationToken();

    // hashed token
    const hashedToken = crypto
      .createHash("sha256")
      .update(rawToken)
      .digest("hex");

    // expiry
    const expiresAt = generateTokenExpiry();

    // save token
    await prisma.emailVerificationToken.create({
      data: {
        token: hashedToken,
        expiresAt,
        userId: user.id,
      },
    });

    // send email
    try {
      await sendVerificationEmail(user.email, rawToken);
    } catch (emailErr) {
      console.error("Failed to send verification email:", emailErr.message);
      // Still return success message so registration flow works
    }

    return res.status(201).json({
      success: true,
      message: "Registration successful. Please verify your email.",
    });

  } catch (err) {
    console.error("Register Error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // verify email
    if (!user.isVerified) {
      return res.status(401).json({
        success: false,
        message: "Please verify your email",
      });
    }

    // jwt token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      process.env.SECRET,
      {
        expiresIn: "15m",
      }
    );

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      }
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default { login, register };