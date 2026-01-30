import User from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { generateToken } from "../utils/generateToken.js";
import { OTPModel } from "../models/otp.model.js";


export const signUp = async (req, res) => {
  try {
    const { name, email, password, otp } = req.body;

    // 1. Validate all fields
    if (!name || !email || !password || !otp) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // 2. Verify OTP (The Gatekeeper)
    const validOtp = await OTPModel.verify(email, otp, 'signup');

    if (!validOtp) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    // 3. OTP is valid! NOW we create the user
    const hashedPassword = await hashPassword(password);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = await User.create(userData); // This is your MySQL User.create

    // 4. Clean up: Delete the used OTP
    await OTPModel.deleteByEmail(email);

    // 5. Generate Token & Login
    const token = await generateToken(newUser.id, newUser.email);

    return res.status(201).json({
      success: true,
      message: "Account verified and created successfully",
      user: newUser,
      token,
    });

  } catch (error) {
    console.error("Error in signUp: ", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findByEmail(email);
    console.log("User: ", user);


    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credential",
      });
    }
    console.log("Password: ", user.password);

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credential",
      });
    }

    const token = await generateToken(user.id, user.email);

    return res.status(200).json({
      success: true,
      message: "Login Successfull",
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
