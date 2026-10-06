import "./Header.css"
import Logo from "../../assets/Logo.png";
import Logot from "../../assets/Logo-bg-none.png"
import pfp from "../../assets/user.png"
import search from "../../assets/search.png"
import accessibility from "../../assets/accessibility.png"
import { NavLink } from "react-router";
import {useState} from "react"

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="outline">
            <div className="section-1">
               <NavLink to="/"> <img className="Logo" src={Logot}/></NavLink>
                <div className="profile">
                
                </div>
                <header className="header">
        <button className="menu-button" onClick={() => setMenuOpen(true)}>
          MENU
        </button>
 

        <NavLink><img className="access" src={accessibility}/></NavLink>
        <NavLink to="Auth" className="join-button">
          <img className="profile-pic" src={pfp}/>
        </NavLink>
      </header>
 
      <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <NavLink to="Auth"><img src={Logot} className="logo" /></NavLink>
 
          <button className="close-button" onClick={() => setMenuOpen(false)}>
            CLOSE
          </button>
        </div>
 
        <nav className="menu-links">
          <br />
          <NavLink to="/about">ABOUT TOKA</NavLink>
          <br />
          <NavLink to="/membership">MEMBERSHIP</NavLink>
          <br />a
          <NavLink to="dashboard">DASHBOARD</NavLink>

          <br />
          <NavLink to="social">TOKA SOCIAL</NavLink>
        </nav>
      </div>
            </div>

        </div>
    )
}