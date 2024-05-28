export interface User {
  _id: number;
  username: string;
  password: string;
  email: string;
  films: Film[];
}
export interface Film {
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

export interface StatsMinsWatchedProps {
  films: Film[];
}

export interface watchMonth {
  month?: string;
  runtime?: number;
}

export interface DeleteProps{
  film_id: string | number | undefined;
  user_id: string | number | undefined;
  setFilmsByUserId : any
}