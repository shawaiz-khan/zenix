import express from "express";
import { contactSupport } from "../controllers/index.js";

const router = express.Router();

router.post("/support", contactSupport);
router.post("/developer", () => console.log("Developer Contacted"));

const contactRoutes = router;

export default contactRoutes;