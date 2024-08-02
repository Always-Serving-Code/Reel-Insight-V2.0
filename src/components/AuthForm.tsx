import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("PumpkinHead");
  const [password, setPassword] = useState("iLovePumpkins98");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className={isSignUp ? "sign-up-form" : "log-in-form"}
      onSubmit={handleSubmit}
    >
      <div className="option">{isSignUp ? "Sign Up" : "Login"}</div>
      <div className="user-info-label">
        <label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value="PumpkinHead"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="user-info-label">
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value="iLovePumpkins98"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      {isSignUp ? (
        <div className="user-info-label">
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
      ) : (
        ""
      )}

      <Link to="/home">
        <button
          className="button-submit-auth"
          type="submit"
          disabled={!username || !password || (isSignUp && !email)}
        >
          Submit
        </button>
      </Link>

      <div>
        {isSignUp ? (
          <button
            className="button-auth-form"
            type="button"
            onClick={() => setIsSignUp(false)}
          >
            Already have an account? Login
          </button>
        ) : (
          <button
            className="button-auth-form"
            type="button"
            onClick={() => setIsSignUp(true)}
          >
            Don't have an account? Sign Up..... test
          </button>
        )}
      </div>
    </form>
  );
}
