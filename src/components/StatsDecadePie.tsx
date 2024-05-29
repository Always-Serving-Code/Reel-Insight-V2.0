import { StatsProps, Film, YearObj } from "../interfaces";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function StatsDecadePie(props: StatsProps) {
  const { filmsWatched } = props;
  const releaseYearArr: Array<number> = [];
  if (filmsWatched.length) {
    filmsWatched.forEach((film: Film) => {
      releaseYearArr.push(film.release_year);
    });

    const yearObj: YearObj = {};
    releaseYearArr.forEach((year) => {
      if (year >= 1970 && year <= 1979) {
        yearObj["1970s"]
          ? (yearObj["1970s"] = yearObj["1970s"] + 1)
          : (yearObj["1970s"] = 1);
      } else if (year >= 1980 && year <= 1989) {
        yearObj["1980s"]
          ? (yearObj["1980s"] = yearObj["1980s"] + 1)
          : (yearObj["1980s"] = 1);
      } else if (year >= 1990 && year <= 1999) {
        yearObj["1990s"]
          ? (yearObj["1990s"] = yearObj["1990s"] + 1)
          : (yearObj["1990s"] = 1);
      } else if (year >= 2000 && year <= 2009) {
        yearObj["2000s"]
          ? (yearObj["2000s"] = yearObj["2000s"] + 1)
          : (yearObj["2000s"] = 1);
      } else if (year >= 2010 && year <= 2019) {
        yearObj["2010s"]
          ? (yearObj["2010s"] = yearObj["2010s"] + 1)
          : (yearObj["2010s"] = 1);
      } else {
        yearObj["2020s"]
          ? (yearObj["2020s"] = yearObj["2020s"] + 1)
          : (yearObj["2020s"] = 1);
      }
    });

    const decades: Array<string> = [];
    const decadesData: Array<number> = [];
    for (const decade in yearObj) {
      decades.push(decade);
      decadesData.push(yearObj[decade]);
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
      labels: decades,
      datasets: [
        {
          label: "Number of Films",
          data: decadesData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <>
        <div className="stat-title">
          <h2>Favourite Decades</h2>
        </div>
        <Pie data={data} />
        <hr className="stat-divider" />
      </>
    );
  }
}
