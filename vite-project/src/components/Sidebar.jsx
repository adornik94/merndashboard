/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect,useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import FlexBetween from './FlexBetween';
import { useLocation,useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { isAsyncThunkAction } from '@reduxjs/toolkit';
import {ChevronLeft, ChevronRightOutlined } from '@mui/icons-material';
import {shades}  from '../theme';





const navItems =[
{text: "Dashboard"},
{text: "Products"}, 
{text: "Transactions"}, 
{text: "Customers"}, 
{text: "Overview"}, 
{text: "Monthly"}, 
{text: "Daily"}

]




// eslint-disable-next-line react/prop-types
const Sidebar = ({isSidebarOpen,setIsSidebarOpen,drawerWidth,isNonMobile})=>{

const {pathname} = useLocation();  //grab the path that we are currently at

const [active,setActive] = useState("");  //this will determine what page we are currently at

const navigate = useNavigate(); // from react routter dom 

const theme = useTheme(); // proveri da li si je dobro importovala



useEffect(()=>{

  setActive(pathname.substring(1));

},[pathname]);


//it means that any time path changes we are going to set 
//mactiveValue to path we are currently at ....

    return (<Box  component = "nav">
              {
                isSidebarOpen && (
                 <Drawer open = {isSidebarOpen}
                  onClose = {()=>setIsSidebarOpen(false)}
                  variant = "persistent"
                   anchor = "left"
                   sx= {{

                     width: drawerWidth, 
                     "& .MuiDrawer-paper":{

                         color: theme.palette.pink.main,
                         backgroundColor:"#E8E8E8",
                         boxSizing: "border-box",
                         borderWidth: isNonMobile? 0:"2px", 
                         width: drawerWidth

                      } }
                   }

                 >
                    <Box width= "100%">
                        <Box  m= "1.5rem 2rem 2rem 3rem">
                              <FlexBetween   color={theme.palette.pink.main}> 
                                    <Box display="flex"  alignItems= "center" gap= "0.5rem">
                                         <Typography  id= "logo" fontWeight="bold"  variant ="h3">
                                            LOGO
                                         </Typography>
                                         <IconButton id ="chevicon" onClick= {()=>setIsSidebarOpen(!isSidebarOpen)}> 
                                              <ChevronRightIcon  sx={{color:theme.palette.pink.main, ml: "auto"}}/>
                                        </IconButton>
                                    </Box>
                              </FlexBetween>
                          </Box> 
                            
                         <List>
                              {navItems.map((el)=>{
                                 
                                 const lText  = el.text.toLowerCase();
                                 return <ListItem  key={el.text} disablePadding>
                                     <ListItemButton   onClick = {()=>{navigate(`/${lText}`); setActive(lText)  }} >
                                      
                                      <ListItemText  sx= {{textAlign: "center",color:"#ff1493" ,
                                      fontSize:"14px" ,fontWeight: "bold"}}>
                                      {el.text}
                                      </ListItemText>
                                      </ListItemButton>
                                 </ListItem>

                              })}
                         </List>
                                  
                    </Box>
 
                    <Box position="absolute" bottom= "2rem"> 
                       <Divider/>
                       <FlexBetween flexDirection= "row"  gap="2rem" m= "1.5rem 2rem 0rem  3rem">
                         <Box textAlign = "left">
                         </Box>
                         </FlexBetween>
                    </Box>
                 </Drawer>
                 

                )
              }
          </Box>)


}



export default Sidebar;