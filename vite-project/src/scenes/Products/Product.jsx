/* eslint-disable react/prop-types */
import React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import {IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const  Product = (props)=>{


 const theme = useTheme();
 const [expanded, setExpanded] = React.useState(false);
 const [flag, setFlag] = React.useState(true);
 



 const handleExpandClick = () => {
   setExpanded(!expanded);
   setFlag(!flag);
 };






return (
         <Card sx={{ fontFamily: "Open Sans", maxWidth: 345,backgroundImage:'none'
         ,backgroundColor:  theme.palette.grey.light}} >
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[100] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {props.name}
       
      />
      <CardContent>
          <Typography    sx= {{fontSize: "14px",fontFamily: "Open Sans" }}   color = {theme.palette.pink.main}>
            {"category:  "+ props.category}
          </Typography>
          <Typography  sx= {{mb: "1.5rem",fontSize: "18px",fontFamily: "Open Sans"}} color = {theme.palette.pink.main}>{ "name:  " +props.name.toLowerCase()}</Typography>
          <Typography sx= {{fontFamily: "Open Sans"}} color = {theme.palette.pink.main}>{"price: "+props.price.substring(1)+ " $"}</Typography>
          <Typography sx={{fontFamily: "Open Sans" , mb: "5px"}} color = {theme.palette.black.main}></Typography>
          <Typography sx={{fontFamily: "Open Sans" , mb: "5px"}} color = {theme.palette.black.main}></Typography>
          <Typography sx={{fontFamily: "Open Sans" , mb: "5px"}} color = {theme.palette.pink.main}>description:</Typography>
          <Typography sx={{fontFamily: "Open Sans"}} color = {theme.palette.black.main} >{props.desc}</Typography>
          <Typography  sx={{fontFamily: "Open Sans"}} color = {theme.palette.black.main}>{props.rating}</Typography>
      </CardContent>
      <CardActions>
      <ExpandMore
          expand={expanded}
        
          sx={{color: flag ? theme.palette.pink.main : "black"}}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>  
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
            <Typography color = {purple[400]} >id: {props.id}</Typography>
            
        </CardContent>
        </Collapse>

    
      
       


  
    </Card>
  );




}


export default Product;





























