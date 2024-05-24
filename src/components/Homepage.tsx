import StatCardStyle from "../components/styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";
import FilmSearch from "./FilmSearch";

export default function Homepage() {
	return (
		<div>
			<FilmSearch />
			<StatCardStyle>
				<StatsFilmsWatched />
			</StatCardStyle>
		</div>
	);
}
