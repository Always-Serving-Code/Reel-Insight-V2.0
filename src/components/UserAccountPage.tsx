import { useEffect, useState } from "react";
import avatar from "../assets/images/cat.avif";
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
      <div className="account-details-container">
        <img className="account-avatar" src={avatar} alt="Avatar image" />
        <section className="account-info">
          <p className="user-info">
            <span className="bold">Username: </span>
            {userData.username}{" "}
          </p>
          <p className="user-info">
            <span className="bold">Email address: </span>
            {userData.email}
          </p>
        </section>

        <div className="account-button">
          <Link to={"/"}>
            <button className="button">Log out</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
