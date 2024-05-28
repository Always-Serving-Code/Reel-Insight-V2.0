import { MdHome } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../css modules/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.icons}>
      <Link to="/home" className={styles.link}>
        <MdHome />
      </Link>
      <Link to="/history" className={styles.link}>
        <PiFilmReelFill />
      </Link>
      <Link to="/stats" className={styles.link}>
        <VscGraphLine />
      </Link>
      <Link to="/user" className={styles.link}>
        <FaRegUserCircle />
      </Link>
    </nav>
  );
}
