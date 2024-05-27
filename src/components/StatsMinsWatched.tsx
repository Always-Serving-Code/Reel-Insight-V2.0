interface StatsMinsWatchedProps {
  films: [
    {
      _id?: number | string;
      title: string;
      directors: string[];
      genres: string[];
      release_year: number;
      poster_url: string;
      synopsis: string;
      lead_actors: string[];
      runtime: number;
      __v?: number;
    }
  ];
}

export default function StatsMinsWatched(props: StatsMinsWatchedProps) {
  const { films } = props;
  let totalMinsWatched = 0;
  for (const film of films) {
    totalMinsWatched += film.runtime;
  }

  return (
    <div>
      <p>Total Minutes Watched: {totalMinsWatched}</p>
    </div>
  );
}
