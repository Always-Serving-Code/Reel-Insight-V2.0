import { StatsProps, Film, GenreObj } from "../interfaces";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function StatsGenrePie(props: StatsProps) {
  const { filmsWatched } = props;

  const genreArr: Array<string> = [];
  if (filmsWatched.length) {
    filmsWatched.forEach((film: Film) => {
      film.genres.forEach((genre: string) => {
        genreArr.push(genre);
      });
    });

    const filteredGenres: Array<string> = genreArr.filter(
      (value, index) => genreArr.indexOf(value) === index
    );

    console.log(filteredGenres);

    const uppercaseGenres = filteredGenres.map(
      (genre) => genre[0].toUpperCase() + genre.slice(1)
    );

    const genreObj: GenreObj = {};
    genreArr.forEach((genre) => {
      if (genre in genreObj) {
        genreObj[genre] = genreObj[genre] + 1;
      } else {
        genreObj[genre] = 1;
      }
    });

    const dataArr: Array<number> = [];
    for (const genreData in genreObj) {
      dataArr.push(genreObj[genreData]);
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
      labels: uppercaseGenres,
      datasets: [
        {
          label: "Number of Films",
          data: dataArr,
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
      <div>
        <div className="stat-title">
          <h2>Top Genres</h2>
        </div>
        <Pie data={data} />
        <hr className="stat-divider" />
      </div>
    );
  }
}
