import "./home.css"
import Carousel from "../components/carousel/carousel"
import { NavLink } from "react-router"

export default function Home(){

    return(

        <div className="home">

        <div className="hero-banner">

        <Carousel/>

        </div>    

        <div className="text">

            <h1>Our Goals</h1>

            <p>Toka Fitness is your personalised approach to health and fitness, designed to help you achieve your goals with a plan that works for you. We create personalised meal plans based on your goals, preferences, and lifestyle, alongside tailored gym programmes to help you train effectively and make consistent progress. Whether your goal is to lose weight, build muscle, increase strength, or simply improve your overall fitness, Toka Fitness gives you the structure, guidance, and support you need to stay motivated and reach your goals.</p>

        </div>

        <div className="member">

            <div className="teirs">

                <div className="circle">

             

                </div>

                <h1>ToKa Plus</h1>

                <p className="text-2">Everything included in Free

            <br/>

                Personalised gym programme

                <br/>

                Personalised meal plan

                <br/>

                Plans tailored to your goals and lifestyle

                <br/>

                Weekly workout structure

                <br/>

                </p>

                <NavLink className="member-links" to="member">Learn More</NavLink>

            </div>

            <div className="teirs">

                <div className="circle">



               

                </div>

                <h1>ToKa Basic</h1>

                <p className="text-2">Access to Toka Fitness

                    <br/>

                Basic workout plans

                <br/>

                General meal and nutrition guidance

                <br/>

                Exercise tips and tutorials

                <br/>

                Basic progress tracking</p>

                <NavLink className="member-links" to="member">Learn More</NavLink>

            </div>

            <div className="teirs">

                <div className="circle">



               

                </div>

                <h1>ToKa supreme</h1>

                <p className="text-2">Everything included in Member

                    <br/>

                Fully customised training programme

                <br/>

                Advanced personalised meal plan

                <br/>

                Regular programme adjustments

                <br/>

                Detailed progress reviews

                <br/>

                Personalised calorie and macro adjustments

                <br/>

                Exercise substitutions based on ability and equipment</p>

                <NavLink className="member-links" to="member">Learn More</NavLink>

            </div>

        </div>

        </div>

    )

} 