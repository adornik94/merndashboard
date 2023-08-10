import mongoose from "mongoose";


const daySchema = new mongoose.Schema({

date: String, 
revenue: {
  
  type:String

}, 
expenses:{

    type:String
}

});


const monthSchema = new mongoose.Schema(
    {

    month:String, 
    revnue:{  type:String}, 
    expenses:{

        type:String
    }, 
    operationalExpenses:{

       type:String

    }, 
    nonOperationalExpenses:{
  
        type:String


    }
    }); 

    const KPISchema = new mongoose.Schema({

    totalProfit:{

     type: String
    }, 
    totalRevenue:{

      type: String

    }, 
    totalExpenses:{
      type:String

    }, 
    expensesByCategory:{

       type: Map, 
       of:{

        type:String

       }

    }, 
    monthlyData:[monthSchema], 
    dailyData: [daySchema]


    }, {
        timestamps: true
    });




    const KPI = mongoose.model("KPI", KPISchema);



    export default KPI;