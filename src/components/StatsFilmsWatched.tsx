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
import { StatsProps, Film } from "../interfaces";

export default function StatsFilmsWatched(props: StatsProps) {
  const { filmsWatched } = props;

  const monthArr: Array<string> = [];
  if (filmsWatched.length) {
    filmsWatched.forEach((film: Film) => {
      const date = film["date_watched"];
      const month = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format("MMMM");
      monthArr.push(month);
    });
  }
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
        position: "bottom" as const,
      },
      title: {
        display: true,
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
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filmData: Array<number> = [];

  labels.forEach((month) => {
    let count = 0;
    monthArr.forEach((watchMonth: string) => {
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
        borderColor: "#b44c54",
        backgroundColor: "#b44c54",
      },
    ],
  };

  return filmsWatched.length ? (
    <div className="chart-container">
      <div className="stat-title">
        <h2>Number of Films Watched</h2>
      </div>
      <Line options={options} data={data} />
    </div>
  ) : (
    <h2>loading</h2>
  );
}
