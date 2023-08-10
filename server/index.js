import express from 'express'; 
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 
import helemt from 'helmet';
import morgan from 'morgan'; 
import helmet from 'helmet';
import productRoutes from './routes/product.js';
import transactionRoutes from './routes/transaction.js';
import kpiRoutes from  './routes/kpi.js';
import productstatsRoutes from './routes/productstat.js';
import clientRoutes from './routes/client.js';
import customerRoutes from './routes/customers.js';
import generalstatRoutes from './routes/generalstat.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transaction.js';
import OverallStat from './models/GeneralStat.js';
import KPI from './models/KPI.js';

import {kpis,products,transactions, dataProductStat,dataOverallStat} from './data/data.js'; 



/*configuration */

//mongodb+srv://andjelador994:<password>@cluster0.2z8eol5.mongodb.net/?retryWrites=true&w=majority

// package.json ->  add "type": "module" to allow impor statements 
// nodemon = live server reload, any time we save server is going to restart ..


dotenv.config(); 

const app = express(); 

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

//this allows us to make cross origin shared requests :)

app.use(morgan("common"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

app.use(cors());



/*routes */



app.use("/api", productRoutes);
app.use("/api", transactionRoutes);
app.use("/api",kpiRoutes);
app.use("/api",productstatsRoutes);
app.use("/api",clientRoutes);
app.use("/api",customerRoutes);
app.use("/api",generalstatRoutes);


const PORT =process.env.PORT; // process.env allows us to acess environment variable we just create it 

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

app.listen(PORT, ()=> console.log("server started on port "+ PORT)); 


//User.insertMany(dataUser);

//KPI.insertMany(kpis);


//Product.insertMany(products);
//Transaction.insertMany(transactions);

//OverallStat.insertMany(dataOverallStat);

}).catch((err)=>console.log(err));
