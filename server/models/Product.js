import mongoose from "mongoose";


const  ProductSchema =  new mongoose.Schema(
{

  stat_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductStat"
  },
  name:String, 
price: String, 
description: String, 
category:String,
rating:Number,
expense: String,
transactions: [

  {
    type:mongoose.Schema.Types.ObjectId, 
    ref: "Transaction"
  }
]




},
{timestamps: true})



const Product = mongoose.model("Product",ProductSchema);

export default Product;