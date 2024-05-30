import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
	return (
		<div className="spinnerContainer">
			<FontAwesomeIcon
				icon={faClapperboard}
				className="fa-solid fa-clapperboard spinner fa-5x"
        //@ts-ignore
				flip
			/>
		</div>
	);
}
