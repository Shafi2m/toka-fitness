import "./member.css"
import Price from "../../components/prices/price"

export default function Member(){
    return(
        <>
        <div className="memberships">
            <div className="card">
                <h1>Toka Basic</h1>
                <div className="icon">

                </div>

                <div className="desc">
                    Access to Toka Fitness
                    <br/>
                    Free workout plans
                    <br/>
                    Workout videos and exercise tutorials
                    <br/>
                    Beginner-friendly workout routines
                    <br/>
                    Basic exercise guidance and tips
                    <br/>
                    BMI calculator
                    <br/>
                    General nutrition and healthy eating guidance
                    <br/>
                    Basic progress tracking
                    <br/>
                    Access to the Toka Fitness social community
                    <br/>
                    Connect with other members and share your fitness journey
                    <br/>
                    Community fitness challenges
                    <br/>
                    Motivation and fitness tips
                    <br/>
                </div>

                <div className="price">
                <Price money={"0.00"}/>
                </div>
            </div>
            <div className="card">
                <h1>Toka  Plus</h1>
                <div className="icon">

                </div>

                <div className="desc">
                    Access to everything in the Free Membership
                    <br/>
                    Personalised workout plans based on your goals
                    <br/>
                    Personalised meal plans tailored to your fitness needs
                    <br/>
                    BMI-based fitness and nutrition recommendations
                    <br/>
                    Advanced workout programmes
                    <br/>
                    Personalised exercise recommendations
                    <br/>
                    Custom nutrition guidance
                    <br/>
                    Detailed progress tracking
                    <br/>
                    Fitness goal tracking
                    <br/>
                    Personalised fitness targets
                    <br/>
                    Workout progression and recommendations
                    <br/>
                    Access to premium workout content
                    <br/>
                    Exclusive fitness challenges
                    <br/>
                    Priority access to new features and content
                    <br/>
                    Enhanced social and community features
                    <br/>
                </div>

                <div className="price">
                <Price money={"29.99"}/>
                </div>
            </div>
        
          <div className="card">
                <h1>Toka supreme</h1>
                <div className="icon">

                </div>

                <div className="desc">
                   Access to everything in the Free and Plus Memberships
                    <br/>
                    Fully personalised workout plans
                    <br/>
                    Fully personalised meal plans
                    <br/>
                    Personalised fitness and nutrition recommendations
                    <br/>
                    BMI and fitness assessments
                    <br/>
                    Personalised calorie and nutrition targets
                    <br/>
                    Advanced workout programmes
                    <br/>
                    Workout progression tailored to your performance
                    <br/>
                    Adaptive workout recommendations
                    <br/>
                    Advanced progress tracking and fitness analytics
                    <br/>
                    Detailed fitness goals and performance tracking
                    <br/>
                    Premium workout videos and exclusive programmes
                    <br/>
                    Advanced nutrition and meal planning tools
                    <br/>
                    Exclusive fitness challenges
                    <br/>
                    Full access to the Toka Fitness social community
                    <br/>
                    Enhanced community features and member interactions
                    <br/>
                    Exclusive Supreme member content
                    <br/>
                    Early access to new Toka Fitness features
                    <br/>
                    Priority access to premium content
                    <br/>
                    Complete access to the Toka Fitness experience
                    <br/>

                </div>

                <div className="price">
                <Price money={"2999.99"}/>
                </div>
            </div>
        </div>
        </>
    )
}