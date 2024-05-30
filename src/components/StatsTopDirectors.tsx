import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import "../App.css";
import { Bar } from "react-chartjs-2";
import { ChartData, StatsProps } from "../interfaces";
import { topData } from "../utils/utils";

export default function StatsTopDirectors(props: StatsProps) {
	const { filmsWatched } = props;

	const directors: Array<string> = [];
	if (filmsWatched.length) {
		filmsWatched.forEach((film) => {
			film["directors"].forEach((director: string) => {
				directors.push(director);
			});
		});
	}

	const chartData: ChartData = topData(directors, 3);

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);
	const options = {
		indexAxis: "y" as const,
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: "bottom" as const,
			},
			title: {
				display: true,
			},
		},
	};

	const data = {
		labels: chartData["labels"],
		datasets: [
			{
				label: "Number of Films",
				data: chartData["values"],
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	return (
		<div>
			<div className="stat-title">
				<h2>Most Watched Directors</h2>
			</div>
			<Bar options={options} data={data} />
			<hr className="stat-divider" />
		</div>
	);
}
