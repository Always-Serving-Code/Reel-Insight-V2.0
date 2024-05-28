import { useContext, useEffect, useState } from "react";
import { getFilmsByUserId } from "../utils/apiUtils";
import { Film } from "../interfaces";
import Error from "./Error";
import DeleteFilm from "./DeleteFilm";
import Loading from "./Loading";
import { FilmsContext } from "../contexts/Films";

export default function FilmHistoryPage() {
  const [filmsById, setFilmsById] = useState<Film[]>([]);
  const [isError, setIsError] = useState(false);
  const user_id = 5;
  const [isLoading, setIsLoading] = useState(true);
  const { updateFilms, setUpdateFilms } = useContext(FilmsContext);

  useEffect(() => {
      setIsError(false); 
    const storedFilms = localStorage.getItem("filmsByUserId");
    if (storedFilms) {
      setFilmsByUserId(JSON.parse(storedFilms));
      setIsLoading(false);
    } else {
      getFilmsByUserId(user_id).then((data) => {
        setFilmsByUserId(data);
        localStorage.setItem("filmsByUserId", JSON.stringify(data));
        setIsLoading(false);
      }).catch((error) => {
        setIsError(true);
      });
    }
  }, [updateFilms]);
     

  return isError ? (
    <Error message="Oops something went wrong, try again later" />
  ) : isLoading ? (
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

           
