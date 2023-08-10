import express from "express";

import {getKpis} from "../controller/kpis.js";


const router = express.Router(); 



router.get("/kpis",getKpis);



export default router;