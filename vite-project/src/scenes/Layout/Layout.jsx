import React from 'react';
import { useState } from 'react';
import { Button } from "../../components/Button.style";
import {Box, useMediaQuery} from "@mui/material";
import {Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from "../../components/Navbar"; 
import Sidebar from "../../components/Sidebar";




const Layout = ()=>{
    


    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

     



    

return (
  
    <Box   display = {isNonMobile? "flex":"block"}  width = "100%" height= "100%">

         <Sidebar 
           
            isNonMobile=  {isNonMobile}
            drawerWidth = "250px"
            isSidebarOpen = {isSidebarOpen}
            setIsSidebarOpen = {setIsSidebarOpen}
           />
         <Box width= "100%"  flexGrow = {1}>
           <Navbar
           
             isSidebarOpen = {isSidebarOpen}
             setIsSidebarOpen = {setIsSidebarOpen}
           />
           <Outlet/>
       </Box>      
    </Box>
)


}



export default Layout;