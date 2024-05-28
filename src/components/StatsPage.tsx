import { useState, useEffect } from "react";
import StatsMinsWatched from "./StatsMinsWatched";
import { getUserById } from "../utils/apiUtils";
import { User } from "../interfaces";
import StatCardStyle from "./styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";
import StatsTopActors from "./StatsTopActors";
import StatsTopDirectors from "./StatsTopDirectors";
import StatsDecadePie from "./StatsDecadePie";
import StatsGenrePie from "./StatsGenrePie";

export default function StatsPage() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserById(5).then((user) => {
      setUserData(user);
      setIsLoading(false);
    });
  }, []);

  // TODO: improve Loading UI
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // TODO: improve error handling
  if (!userData) {
    return <p>Something went wrong fetching user</p>;
  }

  return (
    <StatCardStyle>
      <StatsMinsWatched filmsWatched={userData.films} />
      <StatsFilmsWatched filmsWatched={userData.films} />
      <StatsTopActors filmsWatched={userData.films} />
      <StatsTopDirectors filmsWatched={userData.films} />
      <StatsDecadePie filmsWatched={userData.films} />
      <StatsGenrePie filmsWatched={userData.films} />
    </StatCardStyle>
  );
}
