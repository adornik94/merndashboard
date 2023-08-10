/* eslint-disable react/prop-types */
import {Box,Typography,useTheme} from '@mui/material';


import {shades,theme} from '../theme';




const StatBox = ({title,subtitle})=>{

const theme = useTheme(); 


return (

   <Box width ="100%" m= "0 40px">
      <Box display="flex" justifyContent="space-between">
       <Box>
         
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.grey.main }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
         {/*pie chart */}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
      <Typography fontSize= "14px" fontWeight= "bold" color={theme.palette.black.main}>{subtitle}</Typography>
       
      </Box>
   </Box>

)

}

export default StatBox;