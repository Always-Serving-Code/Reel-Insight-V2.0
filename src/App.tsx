import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import Homepage from "./components/Homepage";
import FilmHistoryPage from "./components/FilmHistoryPage";
import UserAccountPage from "./components/UserAccountPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/history" element={<FilmHistoryPage />} />
        <Route path="/user" element={<UserAccountPage />} />
      </Routes>
    </main>
  );
}

export default App;
