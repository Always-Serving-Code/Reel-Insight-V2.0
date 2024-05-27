import { MdHome } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "../css modules/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.icons}>
      <Link to="/">
        <MdHome className={styles.home} />
      </Link>
      <PiFilmReelFill className={styles.film} />
      <VscGraphLine className={styles.graph} />

      <Link to="/user">
        <FaRegUserCircle className={styles.user} />
      </Link>
    </nav>
  );
}
