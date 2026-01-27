import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = async (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.JWT_SECRET,
        {expiresIn : "1h"}
    );
}

export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.log("Error: ", error);
        return null;
    }
}