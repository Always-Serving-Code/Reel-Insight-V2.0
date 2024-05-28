import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Homepage from "./components/Homepage";
import FilmHistoryPage from "./components/FilmHistoryPage";
import UserAccountPage from "./components/UserAccountPage";
import StatsPage from "./components/StatsPage";
import { UserProvider } from "./contexts/User";
import { FilmsProvider } from "./contexts/Films";

function App() {
  return (
    <main>
      <UserProvider>
        <FilmsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/users/5/history" element={<FilmHistoryPage />} />
            <Route path="/user" element={<UserAccountPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
          <Navbar />
        </FilmsProvider>
      </UserProvider>
    </main>
  );
}

export default App;
