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

//hardcoded user for now ***need to update***

export const postFilmToWatched = (
  film_id: number,
  dateWatched: string,
  rating: number
) => {
  const date_watched = new Date(dateWatched);
  return client.patch(`users/5`, { film_id, date_watched, rating });
};

export const getUserById = (user_id: number) => {
  return client.get(`users/${user_id}`).then(({ data }) => {
    return data.user;
  });
};

export const getFilmsByUserId = (user_id: number) => {
  return client.get(`users/${user_id}/films`).then((response: Response) => {
    return response["data"]["films"];
  });
};

export const getFilmsByUserIdQuery = (user_id: number, sortQuery: string) => {
  return client
    .get(`users/${user_id}/films`, {
      params: {
        sort_by: sortQuery,
        order: sortQuery === "title" ? "asc" : "desc",
      },
    })
    .then((response: Response) => response.data.films);
};

export const deleteFilmByIdByUserId = (user_id: number, film_id: number) => {
  return client
    .delete(`users/${user_id}/${film_id}`)
    .then((response: Response) => {
      return response;
    });
};
