import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./pages/HomePage.js";
import HistoryPage from "./pages/HistoryPage.js";

function App() {
  return (
    <>
      <header>
        <h1>Score keeper</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
      <Navigation />
    </>
  );
}

export default App;
