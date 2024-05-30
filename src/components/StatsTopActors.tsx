import { ActorObj, ChartData } from "../interfaces";
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
import { StatsProps } from "../interfaces";
import { topData as topData } from "../utils/utils";

export default function StatsTopActors(props: StatsProps) {
	const { filmsWatched } = props;
	const actors: string[] = [];
	if (filmsWatched.length) {
		filmsWatched.forEach((film) => {
			film["lead_actors"].forEach((actor: string) => {
				actors.push(actor);
			});
		});
	}

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

	const chartData: ChartData = topData(actors, 5);

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
				<h2>Most Watched Actors</h2>
			</div>
			<Bar options={options} data={data} />
			<hr className="stat-divider" />
		</div>
	);
}
