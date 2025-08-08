import express from "express";
import { RegisterUser } from "../controllers/index.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", () => console.log("Login route"));
router.post("/logout", () => console.log("Logout route"));
router.post("/refresh", () => console.log("Refresh route"));

const authRouter = router;

export default authRouter;