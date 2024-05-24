import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <form className="log-in-form">
      <div>LogIn</div>
      <div className="user-info-label">
        <label>
          <input type="text" name="name" placeholder="Username" />
        </label>
      </div>
      <div className="user-info-label">
        <label>
          <input type="text" name="password" placeholder="Password" />
        </label>
      </div>
      <Link to="home">
        <button type="submit">Submit</button>
      </Link>
      <div>
        Don't have an account? <Link to="/signup">SignUp</Link>
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
