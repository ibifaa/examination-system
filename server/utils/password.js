// const bcrypt = require('bcryptjs');

const saltRounds = 10;

// services/passwordService.js
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export const hashPassword = async (plainPassword) => {

  return await bcrypt.hash(plainPassword, SALT_ROUNDS);
};

console.log(hashPassword)

export const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};