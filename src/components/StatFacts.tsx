import { StatsProps } from "../interfaces";

export default function StatFacts(props: StatsProps) {
  const { filmsWatched } = props;

  let totalMins = 0;
  for (const film of filmsWatched) {
    totalMins += film.runtime;

    let numOfFilmsWatched = "";
    if (filmsWatched.length <= 1) {
      numOfFilmsWatched = filmsWatched.length + " film";
    } else {
      numOfFilmsWatched = filmsWatched.length + " films";
    }

    return (
      <div className="statfact-container">
        <p className="statfact-line">
          You've watched a grand total of {numOfFilmsWatched} that lasted{" "}
          {totalMins} minutes this year!
        </p>
      </div>
    );
  }
}
