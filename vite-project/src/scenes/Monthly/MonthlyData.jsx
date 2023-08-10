import React from 'react';
import {Box} from '@mui/material';
import Header from '../../components/Header';
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




const MonthlyData = ()=>{
    

    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

    const theme = useTheme();
   
    const {data}  = useGetGeneralStatsQuery();
 
    let linechartData = [];

    if(data!=null){ 

     linechartData =  data[0].monthlyData.map((e)=>{

        return { month: e.month.substring(0,3),sales:e.totalSales,units: e.totalUnits }

    })

    console.log(linechartData);


    }

return (

    <Box width= "100%" height= "100%" p = "2rem" marginLeft= "10%" >

<motion.div   
          initial= "hidden"
          whileInView = "visible"
          viewport= {{once: true, amount:0.5}}
          transition= {{delay: 0.5 ,duration: 0.5}}
          variants= {{hidden: {opacity: 0,x:-50}, 
          visible: {opacity:1, x:0}
          }}
              >
       <Header  title= "MONTHLY SALES"  subtitle = "Total Sales and units per month"/>
       </motion.div>
    
<ResponsiveContainer width="80%" height="70%" >
<LineChart data={data!=null?linechartData:[]}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="sales" stroke={theme.palette.pink.main} />
  <Line type="monotone" dataKey="units" stroke={theme.palette.grey.dark} />
</LineChart>
</ResponsiveContainer>

    </Box>
)


}



export default MonthlyData;