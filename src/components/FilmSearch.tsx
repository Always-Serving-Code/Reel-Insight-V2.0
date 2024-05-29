import { useEffect, useState } from "react";
import { Film } from "../interfaces";
import { getFilms } from "../utils/apiUtils";
import { filterFilms } from "../utils/utils";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

export default function FilmSearch() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);
  const [allFilms, setAllFilms] = useState<Film[]>([]);
  const [showSuggestedFilms, setShowSuggestedFilms] = useState(true);

  useEffect(() => {
    getFilms().then((films) => {
      setAllFilms(films);
    });
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      setFilteredFilms([]);
    } else {
      const searchedFilms = filterFilms(allFilms, currentSearch);
      setFilteredFilms(searchedFilms);
    }
  }, [currentSearch]);

  function onInputChange(e: React.FormEvent<HTMLInputElement>) {
    setCurrentSearch(e.currentTarget.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section onFocus={() => setShowSuggestedFilms(true)}>
      <div className="searchbar-container">
        <h1 className="searchbar-title">Add a New Film</h1>
        <form className="film-search" onSubmit={handleSubmit}>
          <label htmlFor="film-search" />
          <p className="homepage-p">
            Search for a film to rate and add to your watchlist
          </p>
          <input
            className="film-search-bar"
            value={currentSearch}
            placeholder="Search..."
            onChange={(e) => onInputChange(e)}
            onFocus={() => setShowSuggestedFilms(true)}
          ></input>
          {showSuggestedFilms ? (
            <ul
              className="film-search-results"
              onBlur={() => setShowSuggestedFilms(false)}
            >
              {filteredFilms.map((film: Film) => (
                <Link
                  to={`/add-film/${film["_id"]}`}
                  className="film-search-link"
                >
                  <li className="film-search-card" key={film["_id"]}>
                    <img className="film-search-img" src={film.poster_url} />
                    <p>
                      {film.title}, {film.release_year}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          ) : null}
        </form>
      </div>
    </section>
  );
}
