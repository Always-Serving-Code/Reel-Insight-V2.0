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

// import { useEffect, useState } from "react";
export default function StatsFilmsWatched() {
  const [filmsWatched, setFilmsWatched] = useState([]);

  useEffect(() => {
    getUserById(5).then((user) => {
      setFilmsWatched(user.user.data.user.films);
    });
  }, []);

  const monthArr: Array<string> = [];
  if (filmsWatched.length) {
    filmsWatched.forEach((film) => {
      const date = film["date_watched"];
      const month = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format("MMMM");
      monthArr.push(month);
    });
  }
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filmData: Array<number> = [];

  labels.forEach((month) => {
    let count = 0;
    monthArr.forEach((watchMonth: String) => {
      if (month === watchMonth) {
        count++;
      }
    });
    filmData.push(count);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Films Watched",
        data: filmData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return filmsWatched.length ? (
    <div className="chart-container">
      <Line options={options} data={data} />
    </div>
  ) : (
    <h2>loading</h2>
  );
}
