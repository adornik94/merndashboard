import React from 'react';
import Header from '../../components/Header';
import {useState} from 'react';
import {DataGrid} from "@mui/x-data-grid";
import { useGetTransactionsQuery } from '../../state/api';
import { Box } from '@mui/material';
import {useTheme, useMediaQuery}   from "@mui/material";






const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.67,
    },
    {
        field: "createdAt",
        headerName: "CreatedAt",
        flex: 0.67,
      },
]



const Transactions = ()=>{



    const theme = useTheme();
  const { data, isLoading } = useGetTransactionsQuery();

  


  

  if(data!=null && !isLoading){
  
     console.log(data);

  }





    return (

<>
       <Box m ="1.5rem 2.5rem"  >
                 <Header   title= "TRANSACTIONS"    subtitle ="List of transactions"/>
                
      <Box  mt= "2.5rem"  p= "0 0.5rem" height= "75%"  sx= {{
         "& .MuiDataGrid-root":{
             color: theme.palette.secondary[200],     
             border: "none",     
             backgroundColor: theme.palette.background.alt
         }, 

         "& .MuiDataGrid-cell": {
         
        },
        "& .MuiDataGrid-columnHeaders": {
          borderBottom: `1px solid ${theme.palette.secondary[200]} !important`,
         
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
  
            rows={data!=null? data: []}
            columns={transactionColumns} 
            />
    </Box>

 
    </Box>
       
         </>
    )


}


export default Transactions;