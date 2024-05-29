import { StatsProps, watchMonth } from "../interfaces";
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

export default function StatsMinsWatched(props: StatsProps) {
  const { filmsWatched } = props;
  let totalMinsWatched = 0;
  for (const film of filmsWatched) {
    totalMinsWatched += film.runtime;
  }

  const monthArr: Array<object> = [];
  if (filmsWatched.length) {
    filmsWatched.forEach((film) => {
      const date = film.date_watched;
      const month = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format("MMMM");
      monthArr.push({ month: month, runtime: film.runtime });
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
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Number of minutes watched",
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

  const minsData: number[] = [];
  labels.forEach((month: string) => {
    let count = 0;
    monthArr.forEach((watchMonth: watchMonth) => {
      if (month === watchMonth.month) {
        count += watchMonth.runtime;
      }
    });
    minsData.push(count);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Number of minutes watched",
        data: minsData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return filmsWatched.length ? (
    <>
      <div className="chart-container">
        <Line options={options} data={data} />
      </div>
      <div>
        <p>
          You've watched a total of {totalMinsWatched} minutes of film this
          year!
        </p>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}
