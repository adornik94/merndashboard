import React , {useState} from 'react';
import {Box} from '@mui/material';
import Header from '../../components/Header';
import {useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import { useGetGeneralStatsQuery } from '../../state/api';
import { motion, useTransform } from "framer-motion";

import {DataGrid} from "@mui/x-data-grid";


const overviewColumns = [
   {
     field: "month",
     headerName: "Month",
     flex: 1,
   },
   {
     field: "totalSales",
     headerName: "Total Sales",
     flex: 0.67,
   },
   {
       field: "totalUnits",
       headerName: "Total Units",
       flex: 0.67,
     },
]



const Overview = ()=>{
    
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

 const theme = useTheme();

 const {data}  = useGetGeneralStatsQuery();

 /*
 
  _id: "", id objekta nebitan
  year: 2021
  dailyData [{},{},{},...]
  monthlyData: [{},{},{},..] ->  month: "January" ,totalSales: 6166, totalUnits: 177
  salesByCategory: {shoes: 6515, clothing: 225,accessories: 16288, misc: 19545}
  totalCustomers : 5251
  yearlySalesTotal: 65152,

 
 */

 


return ( 
   <Box  width= "100%" height= "100%" p = "2rem">
      
      <motion.div   
                               initial= "hidden"
                               whileInView = "visible"
                               viewport= {{once: true, amount:0.5}}
                               transition= {{delay: 0.5 ,duration: 0.5}}
                               variants= {{hidden: {opacity: 0,x:-50}, 
                               visible: {opacity:1, x:0}
                               }}
              >
                        {data!=null && data.length!=0 ? data.map((e)=>{

                           return (
                           <div key = {e._id}>
                           <Typography variant= "h3"  textAlign = "center"  
                           color = {theme.palette.pink.main}>Overview data</Typography>
                           <Typography mb = "20px"></Typography>
                           <Typography fontSize = "14px" color = {theme.palette.grey.dark}>{e.year}</Typography>
                           <Typography mb = "10px"></Typography>
                           <Typography fontSize= "14px" fontWeight= "bold" color={theme.palette.black.main}>yearlySales Total:
                            {e.yearlySalesTotal}</Typography>
                           <Typography mb = "10px"></Typography>
                           <Typography fontSize = "14px" color={theme.palette.pink.main}>sales by category: </Typography>
                           <Typography fontSize = "14px" color={theme.palette.pink.main}>
                            {"shoes:  "+e.salesByCategory.shoes}
                           </Typography>
                           <Typography fontSize = "14px" color={theme.palette.pink.main}>
                             {"clothing:  "+e.salesByCategory.clothing}
                           </Typography>
                           <Typography fontSize = "14px" color={theme.palette.pink.main}>
                            {"misc:  "+e.salesByCategory.misc}
                           </Typography>
                           </div>
                           )


                        }):<></>}
                         
                  
     </motion.div>
     <motion.div 
                  initial= "hidden"
                               whileInView = "visible"
                               viewport= {{once: true, amount:0.5}}
                               transition= {{delay: 0.5,duration: 0.5}}
                               variants= {{hidden: {opacity: 0,x:-50},  visible: {opacity:1, x:0}}}>
     <Box m ="1.5rem 2.5rem"  >
                 <Header   title= "General overview per month"    subtitle ="list of monthly data"/>
                
      <Box  mt= "2.5rem"  p= "0 0.5rem" height= "75%"  sx= {{
         "& .MuiDataGrid-root":{
             color: "black",     
             border: "none",     
             backgroundColor: theme.palette.grey.light
         }, 

         "& .MuiDataGrid-cell": {
         
        },
        "& .MuiDataGrid-columnHeaders": {
          borderBottom: `1px solid ${theme.palette.grey.main} !important`,
          marginBottom: "5px !important"
        },
        "& .MuiDataGrid-columnSeparator": {
         
        },
        

      }}>
      <DataGrid   columnHeaderHeight={30}
       getRowId={(row) => row._id}
       
     rowHeight={40}
     initialState={{
    
      pagination: { paginationModel: { pageSize: 10 } },
    }}
    pageSizeOptions={[10, 25, 50]}
  
            rows={data!=null? data[0].monthlyData: []}
            columns={overviewColumns} 
            />
    </Box>

 
    </Box>
    </motion.div>

   
     
  </Box>
    
)
}



export default Overview;