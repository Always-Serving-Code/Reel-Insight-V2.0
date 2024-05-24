import { getUserById } from "../utils/apiUtils";
import { Line } from "react-chartjs-2";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../App.css";

import { useEffect, useState } from "react";


export default function StatsFilmsWatched() {
  const [filmsWatched, setFilmsWatched] = useState([]);
  const [dataRequest, setDataRequest] = useState(false);
  useEffect(() => {
    getUserById(5).then((user) => {
      setFilmsWatched(user.user.data.user.films);
      setDataRequest(true);
    });
  }, []);

  console.log(filmsWatched);
  const date = filmsWatched[0]["date_watched"];
  const month = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format("MMMM");

  //loop through the user films, convert with moment and save to new array, add that to line graph

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Films Watched",
      },
    },
    maintainAspectRatio: true,
    aspectRatio: 1,
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Films Watched",
        data: [filmsWatched.length],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Hours Watched",
        data: [filmsWatched.length],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return dataRequest ? (
    <div className="chart-container">
      <Line options={options} data={data} />
    </div>
  ) : (
    <h2>ooops</h2>
  );
}
