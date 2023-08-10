import ProductStat from "../models/ProductStat.js";
import Product from "../models/Product.js";


export const getProducts = async (req,res)=>{

   try{
    
   const productsWithStats = await ProductStat.aggregate([

   {
     $lookup: {

       from: "products", 
       localField: "_id", 
       foreignField: "stat_id",
       let:{
        statId: "$_id"
       }, 
       pipeline: [{
          $match: {$expr: {
            $eq: [{"$toObjectId": "$stat_id"},"$$statId"]
          }}

       }], as: "product"

     }



   }, 
   {

      $project : {
         _id:0,
         dailyData:0, 
         "monthlyData._id":0
         
     }
   }

   ])
      



res.status(200).send({sucess:true,msg: "succesfully returned data",data: productsWithStats});



   }catch(error){

      res.status(400).send({succes:false, msg: error.message})

   }

}
