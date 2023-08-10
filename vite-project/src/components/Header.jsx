/* eslint-disable react/prop-types */
import React from 'react';
import {Typography, Box,useTheme}  from "@mui/material";
import {purple} from '@mui/material/colors';


const Header =(props)=>{


const theme =useTheme();

const {title,subtitle}  = props;

return (
    
    <Box>
       <Typography  sx= {{mb: "10px",fontWeight: "bold", textAlign:"left", mt: "10px"}} color= {theme.palette.black.main}  variant= "h3">
         {title}
       </Typography>
       <Typography  sx= {{mb: "10px",fontWeight: "bold", textAlign: "left"}} color= {theme.palette.pink.main}  variant= "h5">
         {subtitle}
       </Typography>
    </Box>
)


}

export default Header;

