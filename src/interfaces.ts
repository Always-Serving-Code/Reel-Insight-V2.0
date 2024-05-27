export interface Film {
    _id?: any
	title: string;
    directors: string[];
    genres: string[],
    release_year: number,
    poster_url: string,
    synopsis: string,
    lead_actors: string[],
    runtime: number,
    __v?: number
}
