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
}

export interface FilmState {
	_id?: any;
	title?: string;
	directors?: string[];
	genres?: string[];
	release_year?: number;
	poster_url?: string;
	synopsis?: string;
	lead_actors?: string[];
	runtime?: number;
	__v?: number;
}

export interface RatingProps {
	rating: number;
	setRating: (rating: number) => void;
}
