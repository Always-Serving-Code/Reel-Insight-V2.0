import { Film } from "../interfaces";

export const filterFilms = (films: Film[], filter: string) => {
	const filterPattern = new RegExp(filter, "i");
	console.log(films);
	const filteredFilms = [...films].filter((film) => {
		const match: boolean = filterPattern.test(film.title);
		return match;
	});

	return filteredFilms;
};
