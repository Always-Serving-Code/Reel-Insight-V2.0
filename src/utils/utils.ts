import { ChartData, Film } from "../interfaces";

export const filterFilms = (films: Film[], filter: string) => {
	const filterPattern = new RegExp(filter, "i");
	const filteredFilms = [...films].filter((film) => {
		const match: boolean = filterPattern.test(film.title);
		return match;
	});

	return filteredFilms;
};

export const topData = (array: string[], topNumber: number) => {
	const tally: any = {};

	array.forEach((element) => {
		if (element in tally) {
			tally[element] = tally[element] + 1;
		} else {
			tally[element] = 1;
		}
	});

	const topThree: ChartData = { labels: [], values: [] };

	for (let i = 0; i < topNumber; i++) {
		const highestPair: any[] = ["", 0];

		for (const key in tally) {
			if (tally[key] > highestPair[1]) {
				highestPair[0] = key;
				highestPair[1] = tally[key];
			}
		}
		topThree.labels.push(highestPair[0]);
		topThree.values.push(highestPair[1]);
		delete tally[highestPair[0]];
	}

	return topThree;
};
