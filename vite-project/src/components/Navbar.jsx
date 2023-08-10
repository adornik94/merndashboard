import React from "react";



import {Menu as MenuIcon, Search, SettingsOutlined,ArrowDropDownOutlined, MenuOpen, ChevronRightOutlined, MenuOutlined} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FlexBetween from "./FlexBetween";
import {useState} from 'react';
import { AppBar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Toolbar from '@mui/material/Toolbar';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputBase from '@mui/material/InputBase';
import { borderRadius } from "@mui/system";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useLocation,useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Navbar = ({isSidebarOpen,setIsSidebarOpen})=>{





const navigate = useNavigate();
const theme = useTheme();
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);




const pages = ['Products', 'Transactions'];

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



return (<AppBar  sx = {{position: "static", backgroundColor: "white" }}>

        <Toolbar  sx= {{ justifyContent: "space-between"}}>
               
              <IconButton  sx= {{color:"black"}}  onClick ={()=>setIsSidebarOpen(!isSidebarOpen)}> 
               {!isSidebarOpen? <MenuOutlined/>:<></>}
            </IconButton>
             
            <FlexBetween  borderRadius= "9px" gap ="3rem">
            {pages.map((page) => (

              
                 <Button
                
                key={page}
                onClick = {()=>{navigate(`/${page.toLowerCase()}`);}}
                sx={{ mx:2,  my: 2, display: 'block' ,fontSize:"14px" ,fontWeight: "bold", color: theme.palette.pink.main }}
              >
                {page}
              </Button>
))}
            
            </FlexBetween>
          {/*right side */}
         
        </Toolbar>
      </AppBar>)

}



export default Navbar;