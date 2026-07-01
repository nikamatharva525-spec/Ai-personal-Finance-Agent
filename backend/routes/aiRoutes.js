import express from "express";
import { getAIAdvice } from "../controllers/aiController.js";

const router = express.Router();

router.post("/", getAIAdvice);

export default router;