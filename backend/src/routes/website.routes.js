import express from "express"
import { createWebsite } from "../controllers/website.controller.js";

const router = express.Router();
router.post("/", createWebsite);

export default router
