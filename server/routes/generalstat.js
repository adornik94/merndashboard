import express from 'express';

import { getGeneralStats } from '../controller/generalstats.js';

const router = express.Router(); 


router.get('/generalstats',getGeneralStats);


export default router;