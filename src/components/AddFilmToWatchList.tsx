import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { postFilmToWatched, getFilmById } from "../utils/apiUtils";
// import FilmSearch from "./FilmSearch";
import StarRating from "./StarRating";
import { FilmState } from "../interfaces";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function AddFilmToWatchList() {
	const [currentFilm, setCurrentFilm] = useState<FilmState>({});
	const [rating, setRating] = useState<number>(0);
	const [dateWatched, setDateWatched] = useState(
		new Date().toISOString().split("T")[0]
	);

	const [displayAddedPopup, setDisplayAddedPopup] = useState(false);
	const [addingOrAdded, setAddingOrAdded] = useState<string>("");
	const [displayPleaseAddRating, setDisplayPleaseAddRating] =
		useState<boolean>(false);

	const { film_id } = useParams();

	useEffect(() => {
		getFilmById(film_id!).then((film) => {
			setCurrentFilm(film);
		});
	}, []);

	useEffect(() => {
		setDisplayPleaseAddRating(false);
	}, [rating]);

	function handleDateChange(e: React.FormEvent<HTMLInputElement>) {
		setDateWatched(e.currentTarget.value);
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (rating === 0) {
			setDisplayPleaseAddRating(true);
		} else {
			setDisplayAddedPopup(true);
			setAddingOrAdded("Adding...");
			postFilmToWatched(+film_id!, dateWatched, rating).then(() => {
				setAddingOrAdded("Added!");
			});
		}
	}

	return (
		<section>
			{/* <FilmSearch /> */}
			<img className="rating-img" src={currentFilm["poster_url"]} />
			<h1>{currentFilm["title"]}</h1>
			<p>{currentFilm["release_year"]}</p>
			<p>{currentFilm["synopsis"]}</p>
			<form onSubmit={handleSubmit}>
				<StarRating rating={rating} setRating={setRating} />
				{displayPleaseAddRating ? <p>Please rate before submitting!</p> : null}
				<label htmlFor="date-watched" />
				<input
					type="date"
					id="date-watched"
					onChange={handleDateChange}
					value={dateWatched}
				></input>
				<button>submit</button>
			</form>
			{displayAddedPopup && (
				<div className="confirm-add">
					<h2>{addingOrAdded}</h2>
					{addingOrAdded === "Added!" && (
						<Link to="/home">
							<button>Home</button>
						</Link>
					)}
				</div>
			)}
		</section>
	);
}
