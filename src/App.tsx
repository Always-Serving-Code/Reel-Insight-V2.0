import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import LogIn from "./components/LogIn-SignUp/LogIn";
import SignUp from "./components/LogIn-SignUp/SignUp";
import Homepage from "./components/Homepage";
import FilmHistoryPage from "./components/FilmHistoryPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/history" element={<FilmHistoryPage />} />
      </Routes>
    </main>
  );
}

export default App;
