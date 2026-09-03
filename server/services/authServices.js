import crypto from "crypto";
import jwt from "jsonwebtoken";

import prisma from "../prisma/client.js";

import {
  hashPassword,
  comparePassword,
} from "../utils/password.js";

import {
  generateVerificationToken,
  generateTokenExpiry,
} from "./tokenServices.js";

import {
  sendVerificationEmail,
} from "./emailServices.js";