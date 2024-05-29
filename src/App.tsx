import { Route, Routes } from "react-router";
import { useLocation } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Homepage from "./components/Homepage";
import FilmHistoryPage from "./components/FilmHistoryPage";
import UserAccountPage from "./components/UserAccountPage";
import StatsPage from "./components/StatsPage";

import AddFilmToWatchList from "./components/AddFilmToWatchList";

function App() {
	const location = useLocation();
	return (
		<main>
			<Header />
			<Routes>
				<Route path="/" element={<AuthForm />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/users/5/history" element={<FilmHistoryPage />} />
				<Route path="/user" element={<UserAccountPage />} />
				<Route path="/stats" element={<StatsPage />} />
				<Route path="/add-film/:film_id" element={<AddFilmToWatchList />} />
			</Routes>
			{location.pathname !== "/" && <Navbar />}
		</main>
	);
}

export default App;
