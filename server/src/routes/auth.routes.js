import express from "express";
import { GetUser, LoginUser, LogoutUser, RefreshAccess, RegisterUser } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/index.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/logout", LogoutUser);
router.get("/user/me", authMiddleware, GetUser);
router.post("/refresh", RefreshAccess);

const authRouter = router;

export default authRouter;