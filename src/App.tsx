import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp"
import Homepage from "./components/Homepage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/login/home" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default App;
