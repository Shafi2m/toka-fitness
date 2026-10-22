import "./Auth.css"
import { useState } from "react"
import login_img from "../../assets/pexels-alesiakozik-8155159.jpg"
import reg_img from "../../assets/pexels-readymade-3850888.jpg"

import axios from "axios";

const backend_url = "http://127.0.0.1:8001/"
const plans = [
  { value: "free", label: "Toka Free" },
  { value: "basic", label: "Toka Basic" },
  { value: "supreme", label: "Toka Supreme" },
];

export default function Auth() {

    const [selectForm, setSelectedForm] = useState("register");

    function swapForms() {
        if (selectForm == "register") {
            setSelectedForm("login")
        } else {
            setSelectedForm("register")
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-img-col">
                <p>Welcome</p>
                <img src={login_img} className="login-img" alt="Welcome" />
            </div>

            {selectForm == "register" ? <RegisterForm toggleForm={swapForms} /> : <LoginForm toggleForm={swapForms} />}
        </div>
    )
}

function RegisterForm({ toggleForm }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [plan, setPlan] = useState("");
    const [error, setError] = useState("");

    function SubmitForm(e) {
        e.preventDefault();
        setError("");

        if (!email.includes("@") || !email.includes(".")) {
            setError("Enter a valid email");
            return
        }

        if (password != confirmPassword) {
            setError("Passwords do not match.")
            return
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return
        }

        // do a network call to our server
        axios
            .post(`${backend_url}auth/register`, {
                email,
                password,
                name,
                plan
            })
            .then((response) => {
                // axios already turns the response into an object, it's in response.data
                console.log(response.data)
                toggleForm(); // registered, so show the login form
            })
            .catch((err) => {
                // show the server's error if it sent one
                setError(err.response?.data?.detail || "Something went wrong");
            });
    }

    return (
        <form onSubmit={SubmitForm} className="auth-form">
            Register
            <input type="email" placeholder="email@gmail.com" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />    
            <input type="text" placeholder="James James" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Password123" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required />
            <input type="password" placeholder="Password123" className="form-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <fieldset className="plan-options">
            <legend>Choose your plan</legend>
            {plans.map((option) => (
            <label className="plan-option" key={option.value}>
                <input
                type="radio"
                name="plan"
                value={option.value}
                checked={plan === option.value}
                onChange={(e) => setPlan(e.target.value)}
                required
                />
                <span>{option.label}</span>
            </label>
            ))}
        </fieldset>
            <button type="submit">Register</button>
            {error ? <p className="error-msg">{error}</p> : null}

            <div>
                <p>Already have an account?</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Log In</button>
            </div>
        </form>
    )
}


function LoginForm({ toggleForm }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    function SubmitForm(e) {
        e.preventDefault();
        setError("");

        axios
            .post(`${backend_url}auth/login`, {
                email,
                password
            })
            .then((response) => {
                console.log(response.data)
                alert(JSON.stringify(response.data));
            })
            .catch((err) => {
                setError(err.response?.data?.detail || "Something went wrong");
            });
    }

    return (
        <form onSubmit={SubmitForm} className="auth-form">
            Login
            <input type="email" placeholder="email@gmail.com" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password123" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Log In</button>
            {error ? <p className="error-msg">{error}</p> : null}

            <div>
                <p>Don't have an account?</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Register</button>
            </div>
        </form>
    )
}