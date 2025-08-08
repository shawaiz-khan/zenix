import express from "express";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import cors from "cors";
import { authRoutes } from "./routes/index.js";
import { connectDB } from "./lib/index.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        message: `Server is running at port: ${port}`
    })
});

app.use("/auth", authRoutes)

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
});