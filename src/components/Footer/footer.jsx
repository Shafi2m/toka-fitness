import "./footer.css"
import App from "../../assets/App Store.png"
import plays from "../../assets/Play Store.png"
import { NavLink } from "react-router";
import Legal from "../../pages/legal-pages/legal";

export default function Footer() {
    return (
        <div className="foot-stuff">

            <div>
                <NavLink className="H-link" to="Legal">About The ToKa Fitness</NavLink>
                
                <p>
                    About us
                </p>
                <p>
                    The Gym Group's history
                </p>
                <p>
                    Awards
                </p>
                <p>
                    Press area
                </p>
                <p>
                    Help & support
                </p>
            </div>
            <div>
                <NavLink className="H-link" to="Legal">The gyms</NavLink>
                <p>
                    Membership rules
                </p>
                <p>
                    Classes
                </p>
                <p>
                    Personal training
                </p>
                <p>
                    Exercise hub
                </p>
                <p>
                    Gym opening times
                </p>

            </div>
            <div>
                <NavLink className="H-link" to="Legal">Corporate</NavLink>
                <p>Corporate membership</p>
                <p>Property information</p>
                <p>Careers</p>
                <p>Corporate site</p>
            </div>
            <div>
                <NavLink className="H-link" to="Legal">Legal</NavLink>
                <p>Membership agreement</p>
                <p>Accessibility</p>
                <p>Legal stuff</p>
                <p>Privacy & cookie policy</p>
                <h1>Get The ToKa Fitness app</h1>
                <img src={App} /> 
                <img src={plays}/>                                                                                                                                                                                                                         
            </div>
            <div>

            </div>
        </div>
    )
}