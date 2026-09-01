import crypto from "crypto";

export const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

export const generateTokenExpiry = () => {
  return new Date(Date.now() + 1000 * 60 * 60);
};