import { StatusCodes } from "http-status-codes";
import { JwtHelpers } from "../utils/index.js";

const authMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.cookies?.accessToken;
        req.accessToken = accessToken;

        if (!accessToken) {
            res.status(StatusCodes.UNAUTHORIZED).json({
                success: false,
                message: "Invalid or Expired access token"
            });
        }

        const user = await JwtHelpers.verify_tokens(accessToken, "access");

        if (!user) {
            res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Invalid access token"
            });
        }

        console.log(user)

        req.user = user;
        next();
    } catch (error) {
        console.log("AuthMiddleware Error: ", error.message);
        res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: error.message || "Cannot authenticate user"
        });
    }
}

export default authMiddleware;