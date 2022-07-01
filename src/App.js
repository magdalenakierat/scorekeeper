import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./pages/HomePage.js";
import HistoryPage from "./pages/HistoryPage.js";

const players = [
  {
    id: "fjghtueodn12234",
    name: "Paul",
    score: 15,
  },
  {
    id: "lfkghgrurncsj305967",
    name: "Julia",
    score: 20,
  },
  {
    id: "05968gjfhrhfn",
    name: "Ralf",
    score: 34,
  },
  {
    id: "lgkgj948576",
    name: "Mareike",
    score: 10,
  },
];

function App() {
  return (
    <>
      <header>
        <h1>Score keeper</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage players={players} />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
      <Navigation />
    </>
  );
}

export default App;
