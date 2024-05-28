import StatCardStyle from "../components/styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";
import FilmSearch from "./FilmSearch";
import { useEffect, useState } from "react";
import { Film } from "../interfaces";
import { getUserById } from "../utils/apiUtils";
import FilmHistoryPage from "./FilmHistoryPage";
import Loading from "./Loading";

export default function Homepage() {
  const [filmsWatched, setFilmsWatched] = useState<Array<Film>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserById(5).then((user) => {
      setFilmsWatched(user.films);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <FilmSearch />
      <StatCardStyle>
        <StatsFilmsWatched filmsWatched={filmsWatched} />
        <p>Last watched films:</p>
      </StatCardStyle>
    </div>
  );
}
