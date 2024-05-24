import StatCardStyle from "../components/styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";

export default function Homepage() {
  return (
    <div>
      <StatCardStyle>
        <StatsFilmsWatched />
      </StatCardStyle>
    </div>
  );
}
