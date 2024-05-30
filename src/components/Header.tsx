import logo from "../assets/images/Asset 3.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
		<div className="header">
			<Link to="/home">
				<img className="header-logo" src={logo}></img>
			</Link>
		</div>
	);
}
