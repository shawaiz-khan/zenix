import express from "express";
import { LoginUser, RegisterUser } from "../controllers/index.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/logout", () => console.log("Logout route"));
router.post("/refresh", () => console.log("Refresh route"));

const authRouter = router;

export default authRouter;