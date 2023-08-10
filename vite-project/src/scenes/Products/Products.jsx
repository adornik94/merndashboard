import React from 'react';
import {Box} from "@mui/material";
import Header from '../../components/Header';
import { useMediaQuery}   from "@mui/material";
import {useTheme} from "@mui/material/styles";

import { useGetWithStatQuery } from '../../state/api';
import Product from '../../scenes/Products/Product';
import {useGetProductsQuery}  from '../../state/api';
import { motion} from "framer-motion";










const Products = ()=>{
    


const isNonMobile = useMediaQuery("(min-width: 1000px)");


const prodStat = useGetWithStatQuery();   

const productsarray  = useGetProductsQuery();



   /*
if(prodStat.currentData!=null && prodStat.currentData.data.length!=0){
 const products = prodStat.currentData.data.map((e)=>{

    return e.product;
 })

 const prodData = products.map((e)=>{  return e[0]});
 
 setProductsData(prodData);
 setData(prodStat.currentData.data);

console.log(prodData);   // array of arrays

console.log(prodStat.currentData.data);  //array of object where every object contains  {yaeralySalesTotal: "", }
}                                        // monthlyData : [{}], product: [{}]

*/


  if (productsarray!= null){

    
     console.log(productsarray.currentData);
  }









return (
    <Box  m= "1.5rem 2.5rem">
       <motion.div   
          initial= "hidden"
          whileInView = "visible"
          viewport= {{once: true, amount:0.5}}
          transition= {{delay: 0.5 ,duration: 0.5}}
          variants= {{hidden: {opacity: 0,x:-50}, 
          visible: {opacity:1, x:0}
          }}
              >
       <Header  title= "PRODUCTS"  subtitle = "List of our products"/>
       </motion.div>
       
      
       <Box  m ="1.5rem 2.5rem">
       <Box mt= "30px"  display= "grid" 
       gridTemplateColumns = "repeat(4,minmax(0,1fr))" 
       justifyContent= "space-between"
       rowGap = "20px"
       columnGap= "1.33%"
       sx= {{ 
         "& > div": {gridColumn: isNonMobile? undefined: "span 4"} 
       }}>                                                        
        {productsarray!= null && productsarray.currentData!=null ?
        productsarray.currentData.slice(0,30).map((e)=><Product 
        key = {e._id}
        id = {e._id}
        name= {e.name}
        desc = {e.description}
        category = {e.category}
        price = {e.price}
        rating= {e.rating}        
        />): <></>}
          
       </Box>
       </Box>
     


    </Box>
)


}



export default Products;