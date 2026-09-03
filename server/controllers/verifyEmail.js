import crypto from "crypto";
import prisma from '../prisma/client.js';

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ message: "Verification token is required" });
    }

    // hash incoming token
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    // find token
    const storedToken = await prisma.emailVerificationToken.findFirst({
      where: { token: hashedToken },
      include: { user: true },
    });

    if (!storedToken) {
      return res.status(400).json({ message: "Invalid or expired verification token" });
    }

    // check expiry
    if (storedToken.expiresAt < new Date()) {
      await prisma.emailVerificationToken.delete({
        where: { id: storedToken.id },
      });
      return res.status(400).json({ message: "Token expired, please request a new verification token" });
    }

    // verify user
    await prisma.user.update({
      where: { id: storedToken.user.id },
      data: { isVerified: true },
    });

    // delete token — one time use
    await prisma.emailVerificationToken.delete({
      where: { id: storedToken.id },
    });

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });

  } catch (err) {
    console.error("Verify Email Error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};