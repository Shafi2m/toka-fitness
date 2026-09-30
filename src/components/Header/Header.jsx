import "./Header.css"
import Logo from "../../assets/Logo.png";

export default function Header(){
    return(
        <div className="outline">
            <div className="section-1">
                <img className="Logo" src={Logo}/>
            </div>

        </div>
    )
}