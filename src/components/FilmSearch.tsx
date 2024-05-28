import { useEffect, useState } from "react";
import { Film } from "../interfaces";
import { getFilms } from "../utils/apiUtils";
import { filterFilms } from "../utils/utils";

export default function FilmSearch() {
	const [currentSearch, setCurrentSearch] = useState("");
	const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);
	const [allFilms, setAllFilms] = useState<Film[]>([]);
	const [showSuggestedFilms, setShowSuggestedFilms] = useState(false);
	useEffect(() => {
		getFilms().then((films) => {
			setAllFilms(films);
		});
	}, []);

	useEffect(() => {
		const searchedFilms = filterFilms(allFilms, currentSearch);
		setFilteredFilms(searchedFilms);
	}, [currentSearch]);

	function onInputChange(e: React.FormEvent<HTMLInputElement>) {
		setCurrentSearch(e.currentTarget.value);
	}


	return (
		<form className="film-search">
			<label htmlFor="film-search"></label>
			<input
				className="film-search-bar"
				value={currentSearch}
				placeholder="Search for a film here!"
				onChange={(e) => onInputChange(e)}
				onFocus={() => setShowSuggestedFilms(true)}
				onBlur={() => setShowSuggestedFilms(false)}
			></input>
			{showSuggestedFilms ? (
					<ul className="film-search-results">
						{filteredFilms.map((film: Film) => (
							<li className="film-search-card">
								<img className="film-search-img" src={film.poster_url} />
								<p>
									{film.title}, {film.release_year}
								</p>
							</li>
						))}
					</ul>
			) : null}
		</form>
	);
}
