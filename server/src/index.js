import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { globalLimiter, authLimiter } from "./middleware/rateLimiting.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.set('trust proxy', 1) //blocks actual ip not proxy ip

app.use(globalLimiter);

app.use(cors());

app.use("/api/auth", authLimiter, authRoutes);


app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})


