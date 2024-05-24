import axios from "axios";

const client = axios.create({
	baseURL: "https://be-film-stat-app.onrender.com/api/",
});

export const getFilms = async () => {
	const { data } = await client.get("films");
	return data["films"];
};
