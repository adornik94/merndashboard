import Transaction from '../models/Transaction.js';




export const getTransactions = async (req,res)=>{
    
try{

    const transactions = await Transaction.find()
    .limit(50)
    .sort({ createdOn: -1 });

res.status(200).json(transactions);

}catch(err){


    res.status(404).json({message: error.message})
}

   


}


export const getRecentTransactions = async (req,res)=>{

   try{

        const recentTransactions =  await Transaction.find({}).sort({createdAt:-1}).limit(10);
       res.status(200).json(recentTransactions);
   }catch(err){


        res.status(404).json({message: error.message});

   }





}