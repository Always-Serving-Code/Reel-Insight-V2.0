import { filterFilms } from "../src/utils/utils";

describe("filterFilmSearch", () => {
	test("returns an array", () => {
		expect(filterFilms([], "")).toEqual([]);
	});
	test("when passed an array with one object, returns an array with the object if the title key matches the regex", () => {
		expect(
			filterFilms(
				[
					{
						title: "Test",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
				],
				"test"
			)
		).toEqual([
			{
				title: "Test",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
		]);
	});
	test("when passed an array with one object, returns an array with the object if the title key matches the regex", () => {
		expect(
			filterFilms(
				[
					{
						title: "Test",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
				],
				"garbage"
			)
		).toEqual([]);
	});
	test("when passed an array with multiple objects that match the regex, returns an array of all objects", () => {
		expect(
			filterFilms(
				[
					{
						title: "te 1",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
					{
						title: "te 2",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
					{
						title: "te 3",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
				],
				"te"
			)
		).toEqual([
			{
				title: "te 1",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "te 2",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "te 3",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
		]);
	});
	test("when passed an array with multiple objects that DO NOT match the regex, returns an empty array", () => {
		expect(
			filterFilms(
				[
					{
						title: "Not this",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
					{
						title: "Or this",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
					{
						title: "not this either",
						directors: [],
						genres: [],
						release_year: 0,
						poster_url: "",
						synopsis: "",
						lead_actors: [],
						runtime: 0,
					},
				],
				"Te"
			)
		).toEqual([]);
	});
	test("when passed an array with multiple object which do and don't match the regex, only those that match are returned", () => {
		const input = [
			{
				title: "Not this",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "Test",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "Or this",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "test",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "not this either",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "Test 2",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
		];
		const output = [
			{
				title: "Test",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "test",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
			{
				title: "Test 2",
				directors: [],
				genres: [],
				release_year: 0,
				poster_url: "",
				synopsis: "",
				lead_actors: [],
				runtime: 0,
			},
		];
		expect(filterFilms(input, "te")).toEqual(output);
	});
	test("ignores case, position and accounts for spaces", () => {
		const input = [
			{
				title: "The Lord of The Rings: The Fellowship of the Ring",
				directors: ["Peter Jackson"],
				genres: ["fantasy", "action", "adventure"],
				release_year: 2001,
				synopsis:
					"A Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
				poster_url: "https://m.media-amazon.com/images/I/81abn+94cAL.jpg",
				lead_actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
				runtime: 178,
			},
			{
				title: "The Lord of The Rings: The Two Towers",
				directors: ["Peter Jackson"],
				genres: ["fantasy", "action", "adventure"],
				release_year: 2002,
				synopsis:
					"While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
				poster_url:
					"https://artofthemovies.co.uk/cdn/shop/products/lord_of_the_rings_the_two_towers_NG06275_B_2_framed1-423634.jpg?v=1611688137",
				lead_actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
				runtime: 235,
			},
			{
				title: "Lucy",
				directors: ["Luc Besson"],
				genres: ["sci-fi", "action", "thriller"],
				release_year: 2014,
				synopsis:
					"When Lucy unknowingly becomes part of a drug trade, sinister individuals insert medications in her body. They then give her unique abilities, which she uses to gain vengeance against her perpetrators.",
				poster_url: "https://m.media-amazon.com/images/I/91zXnxbQ1QL.jpg",
				lead_actors: ["Scarlett Johansson", "Morgan Freeman"],
				runtime: 90,
			},
		];
		const output = [
			{
				title: "The Lord of The Rings: The Fellowship of the Ring",
				directors: ["Peter Jackson"],
				genres: ["fantasy", "action", "adventure"],
				release_year: 2001,
				synopsis:
					"A Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
				poster_url: "https://m.media-amazon.com/images/I/81abn+94cAL.jpg",
				lead_actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
				runtime: 178,
			},
			{
				title: "The Lord of The Rings: The Two Towers",
				directors: ["Peter Jackson"],
				genres: ["fantasy", "action", "adventure"],
				release_year: 2002,
				synopsis:
					"While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
				poster_url:
					"https://artofthemovies.co.uk/cdn/shop/products/lord_of_the_rings_the_two_towers_NG06275_B_2_framed1-423634.jpg?v=1611688137",
				lead_actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
				runtime: 235,
			},
		];
		expect(filterFilms(input, "lord of t")).toEqual(output);
	});
});
