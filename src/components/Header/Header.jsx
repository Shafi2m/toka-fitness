import "./Header.css"
import Logo from "../../assets/Logo.png";
import Logot from "../../assets/Logo-bg-none.png"
import pfp from "../../assets/user.png"
import search from "../../assets/search.png"
import accessibility from "../../assets/accessibility.png"

export default function Header(){
    return(
        <div className="outline">
            <div className="section-1">
                <img className="Logo" src={Logot}/>
                <div className="profile">
                <button>dashboard</button>
                <button>payments</button>
                <button>details</button>
                <a><img className="access" src={accessibility}/></a>
                <img className="profile-pic" src={pfp}/>
                </div>
            </div>
            <div className="section-2">
          
                <a className="link">Meal Plan</a>
                <a className="link">Social</a>
                <a className="link">Bmi Calcualtor</a>
                <a className="link">Memberships</a>
                <a className="link">sometext</a>
                <a className="link">sometext</a>
              
                <div className="search">
                    <input type="text" placeholder="search..." className="search-bar"/>
                    <a><img className="search-button" src={search}/></a>
                </div>
            </div>

        </div>
    )
}