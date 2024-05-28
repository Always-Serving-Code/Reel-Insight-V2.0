import StatCardStyle from "../components/styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";
import FilmSearch from "./FilmSearch";
import { useEffect, useState } from "react";
import { Film } from "../interfaces";
import { getUserById } from "../utils/apiUtils";

export default function Homepage() {
  const [filmsWatched, setFilmsWatched] = useState<Array<Film>>([]);

  useEffect(() => {
    getUserById(5).then((user) => {
      setFilmsWatched(user.films);
    });
  }, []);

  return (
    <div>
      <FilmSearch />
      <StatCardStyle>
        <StatsFilmsWatched filmsWatched={filmsWatched} />
      </StatCardStyle>
    </div>
  );
}
