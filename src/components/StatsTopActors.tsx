import { getUserById } from "../utils/apiUtils";

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

import { useEffect, useState } from "react";

export default function StatsTopActors() {
  const [filmArr, setFilmArr] = useState([]);

  useEffect(() => {
    getUserById(5).then((user) => {
      setFilmArr(user.films);
    });
  }, []);
  let actors: Array<string> = [];
  if (filmArr.length) {
    filmArr.forEach((film) => {
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
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Most Watched Actors",
      },
    },
  };

  const filteredActors = actors.filter(
    (value, index) => actors.indexOf(value) === index
  );

  let actorObj = {};
  actors.forEach((actor, index) => {
    if (actorObj.hasOwnProperty(actor)) {
      actorObj[actor] = actorObj[actor] + 1;
    } else {
      actorObj[actor] = 1;
    }
  });

  const dataArr: Array<number> = [];
  filteredActors.forEach((actor) => {
    for (const actorData in actorObj) {
      dataArr.push(actorObj[actorData]);
    }
  });

  const labels = filteredActors;
  const data = {
    labels,
    datasets: [
      {
        label: "Number of Films",
        data: dataArr,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
