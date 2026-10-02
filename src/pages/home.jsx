import "./home.css"
import Carousel from "../components/carousel/carousel" 

export default function Home(){
    return(
        <div className="main">
        <div className="hero-banner">
        <Carousel/>
        </div>    
        <div className="text">
            <h1>some text</h1>
            <p>Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text</p>
        </div>
        <div className="member">
            <div className="teirs">
                <div className="circle">

                
                </div>

                <p className="text-2">Some Text Some Text Some Text Some Text Some Text Some T</p>
                <a className="member-links">some link</a>
            </div>
            <div className="teirs">
                <div className="circle">

                
                </div>
                <p className="text-2">Some Text Some Text Some Text Some Text Some Text Some T</p>
                <a className="member-links">some link</a>
            </div>
            <div className="teirs">
                <div className="circle">

                
                </div>
                <p className="text-2">Some Text Some Text Some Text Some Text Some Text Some T</p>
                <a className="member-links">some link</a>
            </div>
        </div>
        </div>
    )
}