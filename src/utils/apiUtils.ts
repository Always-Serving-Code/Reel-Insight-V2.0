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

export const getUserById = (user_id: number) => {
  return axios
    .get(`https://be-film-stat-app.onrender.com/api/users/${user_id}`)
    .then(({ data }) => {
      return data.user;
    });
};

export const getFilmsByUserId = (user_id: number) => {
  return client.get(`users/${user_id}/films`).then((response: Response) => {
    return response["data"]["films"];
  });
};

export const deleteFilmByIdByUserId = (user_id: number, film_id: number) => {
	return client.delete(`users/${user_id}/${film_id}`);
  
  };
  
