import express from "express";



import {getRecentTransactions, getTransactions} from "../controller/transactions.js";


const router = express.Router();



router.get("/transactions",getTransactions);
router.get("/recentTransactions",getRecentTransactions);


export default router;