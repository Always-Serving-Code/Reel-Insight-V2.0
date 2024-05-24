import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <form className="sign-up-form">
      <div>SignUp</div>
      <div className="user-info-label">
        <label>
          <input type="text" name="username" placeholder="Username" />
        </label>
      </div>
      <div className="user-info-label">
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>
      </div>
      <div className="user-info-label">
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
      </div>
      <Link to="home">
        <button type="submit">Submit</button>
      </Link>
      <div>
        Already have an account? <Link to="/login">LogIn</Link>
      </div>
      <div className="extra-options">
        <button>Login with Google</button>
      </div>
      <div className="extra-options">
        <button>Login with Facebook</button>
      </div>
    </form>
  );
}
