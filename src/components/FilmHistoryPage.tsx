import { useEffect, useState } from "react";
import { getFilmsByUserIdQuery } from "../utils/apiUtils";
import { Film } from "../interfaces";
import DeleteFilm from "./DeleteFilm";
import Loading from "./Loading";
import FilmsSorter from "./FilmsSorter";
import FilmHistoryRating from "./FilmHistoryRating";
import { useSearchParams } from "react-router-dom";

export default function FilmHistoryPage() {
  const [filmsByUserId, setFilmsByUserId] = useState<Film[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortQuery = searchParams.get("sort_by") ?? "date_watched";
  const [isLoading, setIsLoading] = useState(true);
  const user_id = 5;

  useEffect(() => {
    getFilmsByUserIdQuery(user_id, sortQuery).then((data) => {
      setFilmsByUserId(data);
      setIsLoading(false);
    });
  }, [sortQuery]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <h1>Watch History</h1>
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
              <p className="film-title">{film.title}</p>
              <FilmHistoryRating key={film["_id"]} rating={film.rating!} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
