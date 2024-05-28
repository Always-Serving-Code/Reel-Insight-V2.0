import { useState, useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteFilmByIdByUserId } from "../utils/apiUtils";
import { DeleteProps } from "../interfaces";
import { Film } from "../interfaces";
import { FilmsContext } from "../contexts/Films";

export default function DeleteFilm({
  film_id,
  user_id,
  setFilmsByUserId,
}: DeleteProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { updateFilms, setUpdateFilms } = useContext(FilmsContext);

  function handleDeleteClick() {
    setShowConfirmation(true);
  }

  function handleConfirmDelete() {
    setShowConfirmation(false);
    deleteFilmByIdByUserId(Number(user_id), Number(film_id)).then(() => {
      setFilmsByUserId((current: any) => {
        const updatedFilms = current.filter((film: Film) => {
          return film["_id"] !== film_id;
        });
        localStorage.setItem("filmsByUserId", JSON.stringify(updatedFilms));
        setUpdateFilms(!updateFilms);
        return updatedFilms;
      });
    });
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
          <h2>Delete this film?</h2>
          <button
            className="button-confirm-popup"
            onClick={handleConfirmDelete}
          >
            Yes
          </button>
          <button className="button-confirm-popup" onClick={handleCancelDelete}>
            No
          </button>
        </div>
      )}
    </div>
  );
}
