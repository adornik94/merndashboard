import express from 'express';

import {getProducts } from '../controller/client.js';


const router = express.Router(); 


router.get("/client/products",getProducts);








export default router;












