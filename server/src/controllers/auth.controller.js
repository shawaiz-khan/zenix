import { StatusCodes } from "http-status-codes";
import { createNewUser, loginExistingUser } from "../services/auth.service.js";
import { CookieHelpers } from "../utils/index.js"

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

        const { newUser, accessToken, refreshToken } = await createNewUser(userData);

        CookieHelpers.setCookies(res, "access", accessToken);
        CookieHelpers.setCookies(res, "refresh", refreshToken);

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User registered successfully",
            user: {
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
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
        const { userFound, accessToken, refreshToken } = await loginExistingUser(userData);

        CookieHelpers.setCookies(res, "access", accessToken);
        CookieHelpers.setCookies(res, "refresh", refreshToken);

        res.status(StatusCodes.ACCEPTED).json({
            success: true,
            message: "User loggedIn successfully",
            user: {
                username: userFound.username,
                email: userFound.email,
                role: userFound.role
            }
        })

    } catch (error) {
        console.log("Login Error: ", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
}