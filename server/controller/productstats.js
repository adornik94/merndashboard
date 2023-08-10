import ProductStat from '../models/ProductStat.js';



export const getProductStats = async(req,res)=>{


try{

  const productstats = await ProductStat.find(); 


  res.status(200).json(productstats);

}catch(err){

    res.status(404).json({message: err.message})
}




}
