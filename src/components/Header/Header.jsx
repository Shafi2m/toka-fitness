import "./Header.css"
import Logot from "../../assets/Logo-bg-none.png"
import pfp from "../../assets/user.png"
import accessibility from "../../assets/accessibility.png"
import { NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react"

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const closeMenu = () => setMenuOpen(false);

    // close the menu whenever the page changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return(
        <div className="site-header">
            <div className="section-1">
                <NavLink to="/">
                    <img className="header-logo" src={Logot} alt="Toka Fitness"/>
                </NavLink>

                <header className="header">
                    <button className="menu-button" onClick={() => setMenuOpen(true)}>
                        MENU
                    </button>

                    <button className="access-button" aria-label="Accessibility options">
                        <img className="access" src={accessibility} alt=""/>
                    </button>

                    <NavLink to="/Auth" className="join-button" aria-label="Account">
                        <img className="profile-pic" src={pfp} alt=""/>
                    </NavLink>
                </header>

                <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
                    <div className="menu-header">
                        <NavLink to="/" onClick={closeMenu}>
                            <img src={Logot} className="menu-logo" alt="Toka Fitness"/>
                        </NavLink>

                        <button className="close-button" onClick={closeMenu}>
                            CLOSE
                        </button>
                    </div>

                    <nav className="menu-links">
                        <NavLink to="/Member" onClick={closeMenu}>MEMBERSHIP</NavLink>
                        <NavLink to="/dashboard" onClick={closeMenu}>DASHBOARD</NavLink>
                        <NavLink to="/social" onClick={closeMenu}>TOKA SOCIAL</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}