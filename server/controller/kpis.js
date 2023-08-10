import KPI from '../models/KPI.js';



export const getKpis = async (req,res)=>{

try{


    const kpis = await KPI.find();
    res.status(200).json(kpis);

}catch(err){

    res.status(404).json({message: err.message})
}



}