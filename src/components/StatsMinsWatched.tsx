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

  let total = 0;
  for (const film of filmsWatched) {
    total += film.runtime;
    let statement = "";
    if (filmsWatched.length <= 1) {
      statement = total + " minute";
    } else {
      statement = total + " minutes";
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
        borderColor: "#714b5c",
        backgroundColor: "#714b5c",
      },
    ],
  };

    return filmsWatched.length ? (
      <>
        <div className="stat-title">
          <h2>Number of Minutes Watched</h2>
        </div>
        <p className="stat-line">
          You've watched a total of {statement} this year!
        </p>
        <div className="chart-container">
          <Line options={options} data={data} />
          <hr className="stat-divider" />
        </div>
        <div></div>
      </>
    ) : (
      <p>Loading...</p>
    );
  }
}
