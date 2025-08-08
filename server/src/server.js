import express from "express";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        message: `Server is running at port: ${port}`
    })
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
});