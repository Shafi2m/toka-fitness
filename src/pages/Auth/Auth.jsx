
import { useState } from "react";
import login_img from "../../assets/pexels-readymade-3850888.jpg"; // Adjust to your actual image path

const API_URL = import.meta.env.VITE_API_URL;

export default function Auth() {
  const [selectForm, setSelectedForm] = useState("register");

  function swapForms() {
    setSelectedForm((current) =>
      current === "register" ? "login" : "register"
    );
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-img-col">
        <p>Welcome</p>
        <img src={login_img} className="login-img" alt="Welcome" />
      </div>

      {selectForm === "register" ? (
        <RegisterForm toggleForm={swapForms} />
      ) : (
        <LoginForm toggleForm={swapForms} />
      )}
    </div>
  );
}

function RegisterForm({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function SubmitForm(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof result.detail === "string"
            ? result.detail
            : "Registration failed."
        );
      }

      // Registration succeeded. Switch to the login form.
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      toggleForm();
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Cannot connect to the server. Check that FastAPI is running."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={SubmitForm} className="auth-form">
      Register

      <input
        type="text"
        placeholder="Full name"
        className="form-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="email@gmail.com"
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={8}
        required
      />

      <input
        type="password"
        placeholder="Confirm password"
        className="form-input"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>

      {error && <p className="error-msg">{error}</p>}

      <div>
        <p>Already have an account?</p>
        <button
          type="button"
          onClick={toggleForm}
          className="form-toggle-btn"
        >
          Log In
        </button>
      </div>
    </form>
  );
}

function LoginForm({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function SubmitForm(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof result.detail === "string"
            ? result.detail
            : "Login failed."
        );
      }

      // Temporary demonstration only.
      // Add your app's proper authenticated session handling here.
      setError("Login successful!");
      console.log("Authenticated user:", result.email);
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Cannot connect to the server. Check that FastAPI is running."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={SubmitForm} className="auth-form">
      Login

      <input
        type="email"
        placeholder="email@gmail.com"
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Log In"}
      </button>

      {error && <p className="error-msg">{error}</p>}

      <div>
        <p>Don't have an account?</p>
        <button
          type="button"
          onClick={toggleForm}
          className="form-toggle-btn"
        >
          Register
        </button>
      </div>
    </form>
  );
}
