import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";

export default function Pages(){ 

    return( 
 
        <Routes> 
            <Route index element={<Home/>} /> 
        </Routes> 
 
    ) 
 
 } 