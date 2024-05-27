import { useState, useEffect } from "react";
import StatsMinsWatched from "./StatsMinsWatched";
import { getUserById } from "../utils/apiUtils";

interface Film {
  _id?: number | string;
  title: string;
  directors: string[];
  genres: string[];
  release_year: number;
  poster_url: string;
  synopsis: string;
  lead_actors: string[];
  runtime: number;
  __v?: number;
}

interface User {
  _id: number;
  username: string;
  password: string;
  email: string;
  films: Film[];
}

export default function StatsPage() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserById(5).then(({ user }) => {
      setUserData(user.data.user);
      setIsLoading(false);
    });
  }, []);

  // TODO: improve Loading UI
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // TODO: improve error handling
  if (!userData) {
    return <p>Something went wrong fetching user</p>;
  }

  return <div>{<StatsMinsWatched films={userData.films} />}</div>;
}
