import "./footer.css"
import App from "../../assets/App Store.png"
import plays from "../../assets/Play Store.png"

export default function Footer() {
    return (
        <div className="foot-stuff">

            <div>
                <h1>About The ToKa Fitness</h1>
                
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
                <h1>The gyms</h1>
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
                <h1>Corporate</h1>
                <p>Corporate membership</p>
                <p>Property information</p>
                <p>Careers</p>
                <p>Corporate site</p>
            </div>
            <div>
                <h1>Legal</h1>
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