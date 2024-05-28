import StatCardStyle from "../components/styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";
import FilmSearch from "./FilmSearch";
import { useEffect, useState } from "react";
import { Film } from "../interfaces";
import { getUserById } from "../utils/apiUtils";
import Error from "./Error";

export default function Homepage() {
  const [filmsWatched, setFilmsWatched] = useState<Array<Film>>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUserById(5)
      .then((user) => {
        setFilmsWatched(user.films);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  return isError ? (
    <Error message="Oops something went wrong, try again later" />
  ) : (
    <div>
      <FilmSearch />
      <StatCardStyle>
        <StatsFilmsWatched filmsWatched={filmsWatched} />
      </StatCardStyle>
    </div>
  );
}
