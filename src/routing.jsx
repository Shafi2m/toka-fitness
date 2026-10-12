import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard/dashboard";
import Auth from "./pages/Auth/Auth";
import Member from "./pages/members/member";
import Legal from "./pages/legal-pages/legal";
import Social from "./pages/social/social";
export default function Pages(){ 

    return( 
 
        <Routes> 
            <Route index element={<Home/>} /> 
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="Social" element={<Social/>}/>
            <Route path="Auth" element={<Auth/>}/>
            <Route path="Member" element={<Member/>}/>
            <Route path="Legal" element={<Legal/>}/>
        </Routes> 
 
    ) 

 } 