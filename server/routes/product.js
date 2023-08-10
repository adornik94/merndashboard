import express from "express";
import {getProducts} from "../controller/products.js";


const router = express.Router();




router.get("/products",getProducts);

export default router;