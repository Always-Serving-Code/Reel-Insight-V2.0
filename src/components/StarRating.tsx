import { RatingProps } from "../interfaces";

export default function StarRating({ rating, setRating }: RatingProps) {
	return (
		<div>
			{[1, 2, 3, 4, 5].map((star) => {
				return (
					<span
						className="star"
						style={{
							cursor: "pointer",
							color: rating >= star ? "gold" : "grey",
							fontSize: "35px",
						}}
                        onClick={(() => { setRating(star)})}
					>
						{" "}
						★{" "}
					</span>
				);
			})}
		</div>
	);
}
