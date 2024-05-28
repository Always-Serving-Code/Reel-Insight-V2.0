import { MdHome } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="icons">
      <Link to="/home" className="link">
        <MdHome />
      </Link>
      <Link to="/history" className="link">
        <PiFilmReelFill />
      </Link>
      <Link to="/users/5/history">
        <PiFilmReelFill className={styles.film} />
      </Link>
      <Link to="/stats" className="link">
        <VscGraphLine />
      </Link>
      <Link to="/user" className="link">
        <FaRegUserCircle />
      </Link>
    </nav>
  );
}
