import {createTheme}  from '@mui/material/styles';


export const shades ={



  black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
},

grey: {
    100: "#f2f2f2",
    200: "#e4e4e4",
    300: "#d7d7d7",
    400: "#c9c9c9",
    500: "#bcbcbc",
    600: "#969696",
    700: "#717171",
    800: "#4b4b4b",
    900: "#262626"
},


yellow: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929"
},

red: {
    100: "#ffd2df",
    200: "#ffa5bf",
    300: "#ff789e",
    400: "#ff4b7e",
    500: "#ff1e5e",
    600: "#cc184b",
    700: "#991238",
    800: "#660c26",
    900: "#330613"
},

pink: {
    100: "#f6d0de",
    200: "#eda1be",
    300: "#e5719d",
    400: "#dc427d",
    500: "#d3135c",
    600: "#a90f4a",
    700: "#7f0b37",
    800: "#540825",
    900: "#2a0412"
},

white: {
    100: "#fefefe",
    200: "#fcfcfc",
    300: "#fbfbfb",
    400: "#f9f9f9",
    500: "#f8f8f8",
    600: "#c6c6c6",
    700: "#959595",
    800: "#636363",
    900: "#323232"
},


}


export const theme = createTheme({


palette: {


  black:{
     main: shades.black[500]

  }, 
  red:{

    main: shades.red[500]
  }, 

  grey: {

    main: shades.grey[500], 
    light: shades.grey[100], 
    dark: shades.grey[700]
  }, 
  neutral:{

    dark: shades.yellow[700], 
    main: shades.yellow[500],
    light: shades.yellow[100]
  }, 
  pink:{

    main: shades.pink[500], 
    dark: shades.pink[700]
  }

}, 
typography:{

   fontFamily: ['Open Sans', 'sans-serif'].join(","), //this will just combine these values into one string
   fontSize: 12 ,     //there is mui component called typography & in typigraphy we can change variant 
                       //to be one of those values h1, h2, h3, h4

   h1: {
    fontFamily: ["Fauna One", "sans-serif"].join(","), 
    fontSize: 48

   }, 
   h2: {
    fontFamily: ["Fauna One", "sans-serif"].join(","), 
    fontSize: 36

   }, 
   h3: {
    fontFamily: ["Fauna One", "sans-serif"].join(","), 
    fontSize: 20

   }, 
   h4: {
    fontFamily: ["Fauna One", "sans-serif"].join(","), 
    fontSize: 14

   }, 

}


})