import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard/dashboard"
import Auth from "./pages/Auth/Auth"
export default function Pages(){ 

    return( 
 
        <Routes> 
            <Route index element={<Home/>} /> 
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="social" element={<social/>}/>
            <Route path="Auth" element={<Auth/>}/>
        </Routes> 
 
    ) 

 } 