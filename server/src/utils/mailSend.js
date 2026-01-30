import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const mailSender =async  (email, title, body) => {
    try {
    let transporter = nodemailer.createTransport({
      host: "gmail",   // e.g., smtp.gmail.com
      auth: {
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASS, 
      },
    });

    // 2. Send the Email
    let info = await transporter.sendMail({
      from: `"LifeStream Team" <${process.env.MAIL_USER}>`, // Sender address
      to: `${email}`,                                        // Receiver
      subject: `${title}`,                                   // Subject
      html: `${body}`,                                       // HTML body
    });

    console.log("Email sent: ", info.messageId);
    return info;

  } catch (error) {
    console.log("Error occurred while sending email: ", error.message);
    throw error; // Throw error so controller knows it failed
  }
}