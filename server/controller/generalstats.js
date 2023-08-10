import GeneralStat from '../models/GeneralStat.js';




export const  getGeneralStats =   async (req,res)=>{


    try{


       const generalStats = await GeneralStat.find();
       res.status(200).json(generalStats);
    
    
    }catch(error){

        res.status(404).json({message:error.message})
    }



}