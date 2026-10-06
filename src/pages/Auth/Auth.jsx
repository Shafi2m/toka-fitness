import "./Auth.css"
import {useState} from "react"
import login_img from "../../assets/pexels-jdgromov-4716814.jpg"



export default function Auth() {

    const [selectForm, setSelectedForm] = useState("register");

    function swapForms(){
        if(selectForm == "register"){
            setSelectedForm("login")
        }else{
            setSelectedForm("register")
        }
    }
    return(
        <>
       <div className="auth-wrapper">
        <div className="auth-img-col">
            <p>Welcome</p>
            <img src={login_img} className="login-img"/>
        </div>

        {selectForm == "register" ? <RegisterForm toggleForm={swapForms}/> : <LoginForm toggleForm={swapForms}/>}
        </div>
        </>
    )
}

function RegisterForm({toggleForm}){
    return(
        <form className="auth-form">
            Register

            <div>
                <p>already have an account?</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Log In</button>
            </div>
        </form>
    )
}
function LoginForm({toggleForm}){
    return(
        <form className="auth-form">
            Login
            <div>
                <p>Don't have an account?</p>
                <p>find out more</p>
                <button onClick={toggleForm} className="form-toggle-btn">Log In</button>
            </div>
        </form>
    )
}