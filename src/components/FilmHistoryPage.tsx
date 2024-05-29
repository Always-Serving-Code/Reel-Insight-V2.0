import { useEffect, useState } from "react";
import { getFilmsByUserId } from "../utils/apiUtils";
import { Film } from "../interfaces";
import DeleteFilm from "./DeleteFilm";
import Loading from "./Loading";
import FilmsSorter from "./FilmsSorter";

export default function FilmHistoryPage() {
  const [filmsByUserId, setFilmsByUserId] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const user_id = 5;

  useEffect(() => {
    getFilmsByUserId(user_id).then((data) => {
      setFilmsByUserId(data);
      console.log(data);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <FilmsSorter />
      <div className="film-history-page">
        <ul className="film-list">
          {filmsByUserId.map((film: Film) => (
            <li key={film["_id"]} className="film-item">
              <DeleteFilm
                film_id={film["_id"]}
                user_id={user_id}
                filmsByUserId={filmsByUserId}
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
    </div>
  );
}
