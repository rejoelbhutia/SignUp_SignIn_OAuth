import express from "express"
import { signUp, signIn } from "../controller/authController.js";
import { sendOtp } from "../controller/sendOpt.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/send-otp", sendOtp);

export default router;