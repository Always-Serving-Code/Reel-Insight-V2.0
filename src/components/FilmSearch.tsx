import { useState } from "react"
import SuggestedFilmsContainer from "./SuggestionFilmCard"
// import { getFilms } from "../utils/apiUtils";



export default function FilmSearch(){
    const [currentFilmSearch, setCurrentFilmSearch] = useState('')
    

    function onInputChange(e: React.FormEvent<HTMLInputElement>) {
			setCurrentFilmSearch(e.currentTarget.value);
		}

    return (
        <form>
            <label htmlFor="film-search"></label>
            <input id="film-search" value={currentFilmSearch} placeholder="Search for a film here!" onChange={(e)=> onInputChange(e)}></input>
            <SuggestedFilmsContainer />
        </form>
    )
}