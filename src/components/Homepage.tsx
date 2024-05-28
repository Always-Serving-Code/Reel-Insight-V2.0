import StatCardStyle from "../components/styling/StatCardStyle";
import StatsFilmsWatched from "./StatsFilmsWatched";
import FilmSearch from "./FilmSearch";
import { useEffect, useState } from "react";
import { Film } from "../interfaces";
import { getUserById } from "../utils/apiUtils";
import Error from "./Error";
import Loading from "./Loading";
import FilmHistoryPage from "./FilmHistoryPage";

export default function Homepage() {
  const [filmsWatched, setFilmsWatched] = useState<Array<Film>>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
     setIsError(false)
    getUserById(5)
      .then((user) => {
        setFilmsWatched(user.films);
      setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);
    
  

  return isError ? (
    <Error message="Oops something went wrong, try again later" /> ) : 
   isLoading ? (
    <Loading />
  ) : (
    <div>
      <FilmSearch />
      <StatCardStyle>
        <StatsFilmsWatched filmsWatched={filmsWatched} />
      </StatCardStyle>
      <p>Recently watched films</p>
      <FilmHistoryPage />
    </div>
  );
}
