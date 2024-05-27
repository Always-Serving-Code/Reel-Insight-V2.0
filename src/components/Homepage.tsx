import StatCardStyle from "../components/styling/StatCardStyle";
//import StatsFilmsWatched from "./StatsFilmsWatched";
import FilmSearch from "./FilmSearch";
import Navbar from "./Navbar";

export default function Homepage() {
	return (
		<div>
			<FilmSearch />
			<StatCardStyle>
				{/* <StatsFilmsWatched /> */}
			</StatCardStyle>
			<Navbar />
		</div>
	);
}
