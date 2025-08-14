import express from "express";
import { contactSupport, contactDeveloper } from "../controllers/index.js";

const router = express.Router();

router.post("/support", contactSupport);
router.post("/developer", contactDeveloper);

const contactRoutes = router;

export default contactRoutes;