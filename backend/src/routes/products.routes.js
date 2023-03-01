import express from "express"
import {getProducts, getProductFromId} from "../controllers/products.controller.js";

const router = express.Router()

router.get("/", getProducts)
router.get("/:pid", getProductFromId)

export default router