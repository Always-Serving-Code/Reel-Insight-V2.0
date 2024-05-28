import styles from "../css modules/UserAccountPage.module.css";
import { useEffect, useState } from "react";
import avatar from "../assets/images/people.png";
import { Link } from "react-router-dom";
import { getUserById } from "../utils/apiUtils";
import Loading from "./Loading";
import { User } from "../interfaces";

export default function UserAccountPage() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserById(5)
      .then((user) => {
        setUserData(user);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <section>
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
    </section>
  );
}
