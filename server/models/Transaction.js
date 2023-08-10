import mongoose from "mongoose";



const TransactionSchema = new mongoose.Schema(

{
  userId: String, 
  amount:String, 
  productIds: [

    {
      type:mongoose.Schema.Types.ObjectId, 
      ref: "Product"
    }
  ]

  

}, {timestamps: true}

)


const Transaction = mongoose.model("Transaction",TransactionSchema);


export default Transaction;