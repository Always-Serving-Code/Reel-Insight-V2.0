import StatCardStyle from "../components/styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";
import FilmSearch from "./FilmSearch";
import StatsTopActors from "../components/StatsTopActors";

export default function Homepage() {
  return (
    <div>
      <FilmSearch />
      <StatCardStyle>
        <StatsFilmsWatched />
      </StatCardStyle>
      <StatsTopActors />
    </div>
  );
}
