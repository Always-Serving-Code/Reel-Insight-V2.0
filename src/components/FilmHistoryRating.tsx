import { RatingProps } from "../interfaces";

export default function FilmHistoryRating({ rating }: RatingProps) {
  console.log('rating here!!!')
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="watched-star"
            style={{
              cursor: "pointer",
              color: rating >= star ? "gold" : "grey",
              fontSize: "15px",
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
}
