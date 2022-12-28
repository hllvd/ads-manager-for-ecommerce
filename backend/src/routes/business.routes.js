import express from "express"
import {createBusiness, getBusiness} from "../controllers/business.controller.js";

const router = express.Router()

router.get("/", getBusiness)
router.post("/", createBusiness)

export default router