import express from 'express';

import { getCustomers} from '../controller/customers.js';


const router = express.Router(); 


router.get("/customers",getCustomers);








export default router;












