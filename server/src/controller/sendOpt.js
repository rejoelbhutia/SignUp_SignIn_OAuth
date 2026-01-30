import User from "../models/user.model.js";
import { OTPModel } from "../models/otp.model.js";
import { mailSender } from "../utils/mailSend.js";
import crypto from "crypto";

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // 1. Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email! Please login.",
      });
    }

    // 2. Generate OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    // 3. Create OTP in DB (type='signup')
    await OTPModel.create(email, otp, expiresAt, 'signup');

    // 4. Send Email
    await mailSender(
      email,
      "Verify your LifeStream Account",
      `<p>Your OTP is <strong>${otp}</strong></p>`
    );

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully. Please check your email.",
    });

  } catch (error) {
    console.error("Error in sendOtp: ", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};