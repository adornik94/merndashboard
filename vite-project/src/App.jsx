import {CssBaseline} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme";
import {useSelector}  from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./scenes/Layout/Layout";
import { Navigate } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import Products from "./scenes/Products/Products";
import Customers from "./scenes/Customers";
import Transactions from "./scenes/Transactions/Transactions";
import Overview from "./scenes/Overview/Overview";
import MonthlyData from "./scenes/Monthly/MonthlyData";
import DailyData from "./scenes/Daily/DailyData";


function App() {
  
const mode = useSelector((state)=> state.global.mode);



  return (
    <>
      <div>
        <BrowserRouter>
          <ThemeProvider theme= {theme}>
              <CssBaseline/>
                 <Routes>
                      <Route  element={<Layout/>}>
                          <Route   path = "/" element={<Navigate  to="/dashboard" replace/>}  />
                          <Route   path = "/dashboard"  element={<Dashboard/>}  />
                          <Route   path= "/products"  element= {<Products/>}/>
                          <Route path = "/customers"  element = {<Customers/>}/>
                          <Route path="/transactions" element ={<Transactions/>}/>
                          <Route path= "/overview"   element = {<Overview/>}/>
                          <Route path = "/monthly"  element = {<MonthlyData/>}/>
                          <Route path = "/daily"   element = {<DailyData/>} />
                       
                          
                      </Route>
                 </Routes>
          </ThemeProvider>
          </BrowserRouter>
       </div>
    </>
  )
}

export default App
