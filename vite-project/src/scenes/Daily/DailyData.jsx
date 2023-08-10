import React from 'react';
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import {Box} from '@mui/material';
import Header from '../../components/Header';
import FlexBetween from '../../components/FlexBetween';
import {useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import { useGetGeneralStatsQuery } from '../../state/api';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer 
  } from "recharts";
  import { motion} from "framer-motion";

import 'react-datepicker/dist/react-datepicker.css';


const DailyData = ()=>{
  
    
    const [startDate, setStartDate] = useState(new Date("2021-02-01"));
    const [endDate, setEndDate] = useState(new Date("2021-03-01"));
    const [datePick,setDatepick] = useState(false);

    const theme = useTheme();
    
    const {data} = useGetGeneralStatsQuery();
/*
you need to implement datapicker which allows us to grab differen dates based on ranges 

*/

let formattedData = [];

let defaultData = [];
  if(data!=null){



     data[0].dailyData.forEach((e)=>{
        
        const formattedDate= new Date(e.date);
        
        if(formattedDate>= startDate && formattedDate<= endDate  && datePick) 
         {
           
             formattedData = [...formattedData,{day:formattedDate.toString().substring(4,10),sales:e.totalSales,
                                               units: e.totalUnits}]
             

         }        
        
     })

     if(!datePick){
      data[0].dailyData.forEach((el)=>{

          const formattedDate = new Date(el.date);
          
          if(formattedDate>= startDate && formattedDate<= endDate && !datePick){
                defaultData = [...defaultData, {day:formattedDate.toString().substring(4,10),
                    sales: el.totalSales, units: el.totalUnits}]

          }
      })

    }

  }

  



return (

   <Box   width= "100%" height= "100%" p= "2rem" marginLeft= "10%">
    
           <Box width="70%" display= "flex" justifyContent="space-between">
         <DatePicker    selected={startDate}   onChange= {date=>{setStartDate(date);
             setDatepick(true);}} dateFormat= "yyyy/MM/dd"  />
         <DatePicker   selected={endDate}   onChange= {date=>{setEndDate(date); 
            setDatepick(true);}} dateFormat= "yyyy/MM/dd" />
         </Box>

         <motion.div   
          initial= "hidden"
          whileInView = "visible"
          viewport= {{once: true, amount:0.5}}
          transition= {{delay: 0.5 ,duration: 0.5}}
          variants= {{hidden: {opacity: 0,x:-50}, 
          visible: {opacity:1, x:0}
          }}
              >
       <Header  title= "DAILY SALES"  subtitle = "Total Sales and units per selected dates"/>
       </motion.div>
       <Box  marginBottom="2rem"></Box>
       
         {
       <ResponsiveContainer width="80%" height="70%" >
<LineChart data={data!=null && datePick?formattedData:defaultData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="day" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="sales" stroke={theme.palette.pink.main} />
  <Line type="monotone" dataKey="units" stroke={theme.palette.grey.dark} />
</LineChart>
</ResponsiveContainer>
}:<></>

        </Box>
   
)


}



export default DailyData;