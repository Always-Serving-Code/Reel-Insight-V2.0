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
import Error from "./Error";
import Loading from "./Loading";

export default function StatsPage() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getUserById(5)
      .then((user) => {
        setUserData(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  return isError ? (
    <Error message="Oops something went wrong, try again later" />
  ) : isLoading ? (
    <Loading />
  ) : (
    <>
      <h1>
        Find your <span className="italic">Statisfaction</span>
      </h1>
      <StatCardStyle>
        <StatsFilmsWatched filmsWatched={userData.films} />
        <hr className="stat-divider" />
      </StatCardStyle>
      <StatCardStyle>
        <StatsGenrePie filmsWatched={userData.films} />
      </StatCardStyle>
      <StatCardStyle>
        <StatsTopActors filmsWatched={userData.films} />
      </StatCardStyle>
      <StatCardStyle>
        <StatsMinsWatched filmsWatched={userData.films} />
      </StatCardStyle>
      <StatCardStyle>
        <StatsTopDirectors filmsWatched={userData.films} />
      </StatCardStyle>
      <StatCardStyle>
        <StatsDecadePie filmsWatched={userData.films} />
      </StatCardStyle>
    </>
  );
}
