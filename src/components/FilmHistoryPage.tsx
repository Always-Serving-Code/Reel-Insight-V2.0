import { useEffect, useState } from "react";
import { getFilmsByUserId } from "../utils/apiUtils";
import { Film } from "../interfaces";
import DeleteFilm from "./DeleteFilm";
import Loading from "./Loading";

export default function FilmHistoryPage() {
  const [filmsByUserId, setFilmsByUserId] = useState<Film[]>([]);
  const user_id = 5;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedFilms = localStorage.getItem("filmsByUserId");
    if (storedFilms) {
      setFilmsByUserId(JSON.parse(storedFilms));
      setIsLoading(false); 
    } else {
      getFilmsByUserId(user_id).then((data) => {
        setFilmsByUserId(data);
        localStorage.setItem("filmsByUserId", JSON.stringify(data));
        setIsLoading(false); 
      });
    }
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="film-history-page">
      <ul className="film-list">
        {filmsByUserId.map((film: Film) => (
          <li key={film["_id"]} className="film-item">
            <DeleteFilm
              film_id={film["_id"]}
              user_id={user_id}
              setFilmsByUserId={setFilmsByUserId}
            />
            <img
              src={film.poster_url}
              className="film-poster"
              alt={film.title}
            />
            <h2 className="film-title">{film.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
