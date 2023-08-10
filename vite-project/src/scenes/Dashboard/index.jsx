import React from 'react'; 
import { motion} from "framer-motion";
import {Box,Typography}  from "@mui/material"
import Header from "../../components/Header";
import { theme } from '../../theme';
import {Button} from "@mui/material";
import StatBox from '../../components/StatBox';
import { useGetKpisQuery, useGetRecentTransacQuery, useGetTransactionsQuery } from '../../state/api';
import { useTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer , 
    Area, 
    AreaChart
  } from "recharts";

 
const Dashboard  =(props)=>{


    let {data} = useGetKpisQuery();
    //const {data}  = useGetKpisQuery(); //vraca ukupne podatke 
   

    const theme = useTheme();
    
    let kpis ={}

    let linechartData = [];
     
let transactions = [];

  



    if(data!=null){

          data.forEach((el)=>{

             kpis ={...kpis, totalExpenses: el.totalExpenses,
                totalRevenue: el.totalRevenue, totalProfit: el.totalProfit}

          })




       

            linechartData =  data[0].monthlyData.map((e)=>{
       
               return { month: e.month.substring(0,3),operational:  Number(e.operationalExpenses.toString().substring(1)),
                nonOperational: Number(e.nonOperationalExpenses.toString().substring(1))}
       
           })

           console.log(linechartData);

         
    }

     data  =useGetRecentTransacQuery();
     if(data!=null){

         transactions = data.currentData;
         console.log(transactions);
     }
    


return (
    <Box m="20px"> 

     <Box   justifyContent ="space-between"
          alignItems="center"
          display="flex">
      
       <Header  title= "Dashboard"  subtitle = "Finance dashboard"/>
       <Box>
          <Button sx ={{backgroundColor: theme.palette.grey.light ,color: theme.palette.grey.dark, 
                        fontSize: "14px" , fontWeight:"bold", padding: "5px 8px"}}>
                  Download Reprts
          </Button>

       </Box>
      
      </Box>
      <Box   display = "grid" 
             marginTop= "3rem"
             gridTemplateColumns ="repeat(12,1fr)"
              gridAutoRows = "130px"
               gap="20px">
          {/*row1 */}

          
    <Box gridColumn ="span 3" backgroundColor = {theme.palette.grey.light} display ="flex"
      alignItems ="center"  justifyContent = "center">

          <StatBox  title ={data!=null ? kpis.totalRevenue:""} subtitle ="total Revenue"/>
    </Box>
    <Box gridColumn ="span 3" backgroundColor = {theme.palette.grey.light} display ="flex"
      alignItems ="center"  justifyContent = "center">

          <StatBox  title = {data!=null? kpis.totalExpenses: ""}  subtitle ="total Expenses" />
    </Box>
    <Box gridColumn ="span 3" backgroundColor = {theme.palette.grey.light} display ="flex"
      alignItems ="center"  justifyContent = "center">

          <StatBox  title = {data!=null?kpis.totalProfit: ""} subtitle ="total Profit " />
    </Box>
    <Box gridColumn ="span 3" backgroundColor = {theme.palette.grey.light} display ="flex"
      alignItems ="center"  justifyContent = "center">

          <StatBox  title = "12,361"  subtitle ="progress"  />
    </Box>
    <Box gridColumn="span 8" gridRow="span 2" backgroundColor ={theme.palette.grey.light}>
         
               <Box p="10px">
             <Typography variant ="h6" fontWeight ="300" color={theme.palette.pink.main}>
                Expenses generated
             </Typography>
              </Box>

             <AreaChart width={730} height={350} data={data!=null?linechartData:null}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="operational" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="nonOperational" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

       
       
    </Box>

          
    {/*transactions */}
             <Box gridColumn ="span 4" gridRow = "span 2" backgroundColor ={theme.palette.grey.light}
                 overflow ="auto">
                   <Box display ="flex" justifyContent = "space-between"
                    alignItems = "center" 
                    borderBottom={`4px solid white`}
                    color= {theme.palette.grey.dark}  p ="15px">
                       <Typography>Recent transactions</Typography>
                   </Box>
                   { transactions!=null ?transactions.map((e,i)=>
                   (
                          <Box  key = {`${e._id}`}
                           display= "flex"
                           justifyContent= "space-between"
                           alignItems= "center"
                           borderBottom= {`4px solid white`}
                           p = "15px"
                           >
                              <Box>

                              <Typography fontSize= "14px" fontWeight= "bold" color = {purple[400]}>{e._id}</Typography>
                              </Box>
                              <Box>{e.createdAt.substring(0,10)}</Box>
                           </Box>

                   )):<></>

                   }
           



            </Box>

      </Box>
    </Box>
)

}

export default Dashboard;