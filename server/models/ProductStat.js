import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
{
  
  yearlySalesTotal: Number, 
  yearlyTotalSoldUnits: Number, 
  monthlyData:[

    {
      month: String, 
      totalSales: Number, 
      totalUnits: Number
    }

  ], 
  dailyData:[

   {

    date:String, 
    totalSales:Number, 
    totalUnits: Number

   }

  ]
  

},{timestamps:true});




const ProductStat = mongoose.model("ProductStat", ProductStatSchema);


export default ProductStat;