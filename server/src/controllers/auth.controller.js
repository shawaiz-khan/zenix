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

        const user = {
            username,
            email,
            password,
            role,
            favorites,
            authToken
        };

        const registeredUser = await createNewUser(user);

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