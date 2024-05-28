import { useEffect, useState } from "react";
import { getFilmsByUserId } from "../utils/apiUtils";
import { Film } from "../interfaces";

export default function FilmHistoryPage() {
  const [filmsById, setFilmsById] = useState<Film[]>([]);

  useEffect(() => {
    getFilmsByUserId(5).then((data) => {
      setFilmsById(data);
    });
  }, []);

  return (
    <div className="film-history-page">
      <ul className="film-list">
        {filmsById.map((film) => (
          <li key={film._id} className="film-item">
            <img src={film.poster_url} className="film-poster" alt={film.title} />
            <h2 className="film-title">{film.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
