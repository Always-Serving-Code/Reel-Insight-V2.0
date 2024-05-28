import axios from "axios";

const client = axios.create({
	baseURL: "https://be-film-stat-app.onrender.com/api/",
});

interface Response {
	data: any | object;
}

export const getFilms = () => {
	return client.get("films").then((response: Response) => {
		return response["data"]["films"];
	});
};

export const getFilmById = (film_id: string) => {
	return client.get(`films/${film_id}`).then((response: Response) => {
		return response["data"]["film"];
	});
};

export const getUserById = (user_id: number) => {
	return client.get(`users/${user_id}`).then((user) => {
		return { user };
	});
};

//hardcoded user for now ***need to update***

export const postFilmToWatched = (
	film_id: number,
	dateWatched: string,
	rating: number
) => {
	const date_watched = new Date(dateWatched);
	return client.patch(`users/5`, { film_id, date_watched, rating });
};
