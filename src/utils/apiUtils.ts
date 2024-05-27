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
