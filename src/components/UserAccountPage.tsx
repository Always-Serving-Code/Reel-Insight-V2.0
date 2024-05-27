import axios from "axios";
import styles from "../css modules/UserAccountPage.module.css";
import { useEffect, useState } from "react";
import avatar from "../assets/images/people.png";
import { Link, Navigate } from "react-router-dom";

export default function UserAccountPage() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    axios
      .get("https://be-film-stat-app.onrender.com/api/users/5")
      .then(({ data }) => setUserData(data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <img className={styles.avatar} src={avatar} alt="Avatar image" />
        <section className={styles.info}>
          <p>You're logged in, {userData.username} </p>
          <p>Email address: {userData.email}</p>
        </section>
      </div>
      <Link to={"/"}>
        <button className={styles.button}>Log out</button>
      </Link>
    </>
  );
}
