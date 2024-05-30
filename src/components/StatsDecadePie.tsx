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
            "#fbf2d1",
            "#d4a29c",
            "#de9f4f",
            "#a75d3a",
            "#995e5d",
            "#714b5c",
            "#b44c54",
            "#ab6c34",
          ],
          borderColor: [
            "#fbf2d1",
            "#d4a29c",
            "#de9f4f",
            "#a75d3a",
            "#995e5d",
            "#714b5c",
            "#b44c54",
            "#ab6c34",
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
