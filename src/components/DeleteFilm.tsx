import { useState, useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteFilmByIdByUserId } from "../utils/apiUtils";
import { DeleteProps } from "../interfaces";
import { Film } from "../interfaces";

export default function DeleteFilm({
  film_id,
  user_id,
  filmsByUserId,
  setFilmsByUserId,
}: DeleteProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleDeleteClick() {
    setShowConfirmation(true);
  }
  function handleConfirmDelete() {
    setShowConfirmation(false);
    deleteFilmByIdByUserId(Number(user_id), Number(film_id)).then(
      (response) => {
        console.log(response);

        filmsByUserId.forEach((film: Film, i: number) => {
          if (film["_id"] === film_id) {
            setFilmsByUserId((current: any) => {
              const newFilms = [...current];
              newFilms.splice(i, 1);
              return newFilms;
            });
          }
        });
      }
    );
  }

  function handleCancelDelete() {
    setShowConfirmation(false);
  }

  return (
    <div className="delete-film">
      <button className="delete-button" onClick={handleDeleteClick}>
        <RiDeleteBin5Fill />
      </button>
      {showConfirmation && (
        <div className="confirm-popup">
          <h2 className="added-text">Delete this film?</h2>
          <button className="button" onClick={handleConfirmDelete}>
            Yes
          </button>
          <button className="button" onClick={handleCancelDelete}>
            No
          </button>
        </div>
      )}
    </div>
  );
}
