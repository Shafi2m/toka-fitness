import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard/dashboard"
import Auth from "./pages/Auth/Auth"
import Member from "./pages/members/member";
export default function Pages(){ 

    return( 
 
        <Routes> 
            <Route index element={<Home/>} /> 
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="social" element={<social/>}/>
            <Route path="Auth" element={<Auth/>}/>
            <Route path="Member" element={<Member/>}/>
        </Routes> 
 
    ) 

 } 