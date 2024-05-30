import { ActorObj } from "../interfaces";
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

  const filteredActors = actors.filter(
    (value, index) => actors.indexOf(value) === index
  );

  const actorObj: ActorObj = {};
  actors.forEach((actor) => {
    if (actor in actorObj) {
      actorObj[actor] = actorObj[actor] + 1;
    } else {
      actorObj[actor] = 1;
    }
  });

  const dataArr: Array<number> = [];
  for (const actorData in actorObj) {
    dataArr.push(actorObj[actorData]);
  }

  const labels = filteredActors;
  const data = {
    labels,
    datasets: [
      {
        label: "Number of Films",
        data: dataArr,
        borderColor: "#de9f4f",
        backgroundColor: "#de9f4f",
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
