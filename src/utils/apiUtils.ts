import axios from "axios";

const client = axios.create({
  baseURL: "https://be-film-stat-app.onrender.com/api/",
});

export const getFilms = async () => {
  const { data } = await client.get("films");
  return data["films"];

};

export const getUserById = (user_id: number) => {
  return axios
    .get(`https://be-film-stat-app.onrender.com/api/users/${user_id}`)
    .then((user) => {
      return { user };
    });

};
