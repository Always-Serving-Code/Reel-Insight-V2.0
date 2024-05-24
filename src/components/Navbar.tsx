import { MdHome } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "../css modules/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.icons}>
      <MdHome className={styles.home} />
      <PiFilmReelFill className={styles.film} />
      <VscGraphLine className={styles.graph} />
      <FaRegUserCircle className={styles.user} />
    </nav>
  );
}
