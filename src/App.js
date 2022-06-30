import Button from "./components/Button/Button.js";
import Player from "./components/Player/Player.js";
import { initialPreviousGames } from "./historyDB.js";
import History from "./components/History/History.js";
import Form from "./components/Form/Form.js";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";

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
      <heading>
        <h1>Score keeper</h1>
      </heading>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Game</h2>

                {players.map((player) => (
                  <Player
                    key={player.id}
                    name={player.name}
                    score={player.score}
                  />
                ))}
                <Button>End game</Button>
                <Form></Form>
              </>
            }
          />
          <Route
            path="/history"
            element={
              <>
                <h2>Previous Games</h2>
                {initialPreviousGames.map((game) => (
                  <History key={game.id} game={game} />
                ))}
              </>
            }
          />
        </Routes>
      </main>
      <Navigation />
    </>
  );
}

export default App;
