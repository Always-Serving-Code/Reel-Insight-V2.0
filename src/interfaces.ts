export interface User {
  _id: number;
  username: string;
  password: string;
  email: string;
  films: Film[];
}
export interface Film {
  _id?: any;
  title: string;
  directors: string[];
  genres: string[];
  release_year: number;
  poster_url: string;
  synopsis: string;
  lead_actors: string[];
  runtime: number;
  __v?: number;
  rating?: number;
}

export interface RatingProps {
  rating: number;
  setRating?: (rating: number) => void;
}

export interface StatsProps {
  filmsWatched: Film[];
}

export interface WatchMonth {
  month?: string;
  runtime?: number;
}

export interface ActorObj {
  [key: string]: number;
}

export interface DirectorObj {
  [key: string]: number;
}

export interface YearObj {
  [key: string]: number;
}
export interface GenreObj {
  [key: string]: number;
}
export interface DeleteProps {
  film_id: string | number | undefined;
  user_id: string | number | undefined;
  setFilmsByUserId: any;
  filmsByUserId: any;
}
