import express from 'express';
import {getProductStats} from '../controller/productstats.js';



const router = express.Router(); 

router.get("/productStats",getProductStats);






export default router;