import { StatusCodes } from "http-status-codes";
import { createNewUser, getUserData, loginExistingUser, refreshAccessToken } from "../services/auth.service.js";
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

export const LogoutUser = async (req, res) => {
    try {
        CookieHelpers.clearCookies(res, "access");
        CookieHelpers.clearCookies(res, "refresh");

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Logout successful"
        })
    } catch (error) {
        console.log("Logout Error: ", error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
}

export const GetUser = async (req, res) => {
    try {
        const { username } = req.user;
        console.log("user data: ", username)

        const user = await getUserData(username);

        res.status(StatusCodes.OK).json({
            success: true,
            message: "User found",
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.log("GetUser Error: ", error.message);
        res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: error.message || "User not found"
        });
    }
}

export const RefreshAccess = async (req, res) => {
    try {
        const authHeader = req.headers["authorization"];
        const refreshToken = req.cookies.refreshToken || authHeader?.startsWith("Bearer ") && authHeader.split(" ")[1];

        if (!refreshToken) {
            res.status(StatusCodes.UNAUTHORIZED).json({
                success: false,
                message: "No refresh token found"
            });
        }

        const accessToken = await refreshAccessToken(refreshToken);
        CookieHelpers.setCookies(res, "access", accessToken);

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Token is refreshed",
            accessToken
        });
    } catch (error) {
        console.log("Refresh Error: ", error.message);
        res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: error.message || "User is unauthorized"
        });
    }
}