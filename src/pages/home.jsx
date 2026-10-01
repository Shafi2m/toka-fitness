import "./home.css"
import old from "../assets/pexels-kampus-8637974.jpg"

export default function Home(){
    return(
        <div className="main">
        <div className="hero-banner">
        <img className="hero-stuff" src={old}/>
        </div>    
        <div className="text">
            <h1>some text</h1>
            <p>Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text</p>
        </div>
        <div className="member">
            <div className="teirs">
                <div className="circle">

                </div>
                <p>Some Text Some Text Some Text Some Text Some Text Some T</p>
            </div>
            <div className="teirs">
                <div className="circle">

                </div>
                <p>Some Text Some Text Some Text Some Text Some Text Some T</p>
            </div>
            <div className="teirs">
                <div className="circle">

                </div>
                <p>Some Text Some Text Some Text Some Text Some Text Some T</p>
            </div>
        </div>
        </div>
    )
}