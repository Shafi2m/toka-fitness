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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    function SubmitForm(e){
        e.preventDefault();

        if(password != confirmPassword){
            setError("WRONG!!!!!!!!")

            return
        } 


      

    }

    return(
        <form onSubmit={SubmitForm} className="auth-form">
            Register
            <input type="email" placeholder="email@gmail.com" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password123" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Password123" className="form-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <input type="text" placeholder="James James" className="form-input"/>
            <button type="submit">register</button>
            {error ? <p className="error-msg">{error}</p> : null}

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