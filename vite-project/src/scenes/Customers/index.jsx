import React from 'react';
import {Box,useTheme} from '@mui/material';
import Header from '../../components/Header';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useGetCustomersQuery } from '../../state/api';
import { purple } from '@mui/material/colors';


const columns = [
    { id: '_id', label: 'Id', minWidth: 170 },
    { id: 'name', label: 'name', minWidth: 100 },
    { id: 'email', label: 'email', minWidth: 100 },
    { id: 'city', label: 'city', minWidth: 100 },
    { id: 'country', label: 'country', minWidth: 100 },
    { id: 'occupation', label: 'occupation', minWidth: 100 },
]
  
  
  
 
  



const Customers =()=>{
    

const theme = useTheme();
    const {data,isLoading} = useGetCustomersQuery();
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };




if(!isLoading){
  
  console.log(data);
}


    return (
   
   <Box  m= "1.5rem 2.5rem">
     <Header  title= "Customers"  subtitle = "List of our customers"/>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: "440px"}} >
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            {
              data!=null && data.length!=0 ?data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              }): <></>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data!=null ? data.length :0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </Box>
      
    
    )
    }



    export default Customers;