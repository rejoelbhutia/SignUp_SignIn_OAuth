import User from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { generateToken } from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findByEmail(email);

    if (existingUser) {
      console.log("User already exist: ", existingUser);

      return res.status(409).json({
        success: false,
        message: "User already exist with this email! Login please",
      });
    }

    const hashedPassword = await hashPassword(password);
    console.log("Hashed Password: ", hashedPassword);
    

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = await User.create(userData);

    const token = await generateToken(newUser.id, newUser.email);
    console.log("Token: ", token);

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
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
    console.log("User: ",user);
    

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
