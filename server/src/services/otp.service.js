import crypto from "crypto";

export const generateOtp = () => {
    const otp = crypto.randomInt(10000, 100000);
    return otp;
}


