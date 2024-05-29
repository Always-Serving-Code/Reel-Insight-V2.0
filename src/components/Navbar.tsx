import { MdHome } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-bar">
    <nav className="icons">
      <Link to="/home" className="nav-link" >
        <MdHome />
      </Link>
      <Link to="/users/5/history" className="nav-link">
        <PiFilmReelFill />
      </Link>
      <Link to="/stats" className="nav-link">
        <VscGraphLine />
      </Link>
      <Link to="/user" className="nav-link">
        <FaRegUserCircle />
      </Link>
    </nav>
    </div>
  );
}
