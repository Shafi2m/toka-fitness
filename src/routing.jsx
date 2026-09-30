import { Routes, Route } from "react-router";
import Home from "./pages/home";

export default function Pages(){ 

    return( 
 
        <Routes> 
            <Route index element={<Home/>} /> 
        </Routes> 
 
    ) 
 
 } 