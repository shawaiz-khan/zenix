import { StatusCodes } from "http-status-codes";
import { createNewUser } from "../services/auth.service.js";

export const RegisterUser = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            role = "user",
            favorites = [],
            authToken = ""
        } = req.body;

        if (!username || !email || !password) {
            throw new Error("Fill all the given fields");
        }

        const userData = req.body;

        const registeredUser = await createNewUser(userData);

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User registered successfully",
            user: {
                username: registeredUser.username,
                email: registeredUser.email,
                role: registeredUser.role
            }
        });
    } catch (error) {
        console.error("Registration Error:", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
};

export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email, !password) {
            throw new Error("Fill all the given fields");
        }

        const userData = req.body;
        const user = await loginExistingUser(userData);

        res.status(StatusCodes.ACCEPTED).json({
            success: true,
            message: "User loggedIn successfully"
        })

    } catch (error) {
        console.log("Login Error: ", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
}