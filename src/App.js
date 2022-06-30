import Button from "./components/Button/Button.js";
import Player from "./components/Player/Player.js";
import { initialPreviousGames } from "./historyDB.js";
import History from "./components/History/History.js";
import Form from "./components/Form/Form.js";

const players = [
  {
    name: "John",
    score: 15,
  },
  {
    name: "Jane",
    score: 15,
  },
  {
    name: "Jim",
    score: 15,
  },
];

function App() {
  return (
    <>
      <heading>
        <h1>Game</h1>
      </heading>
      <main>
        {players.map((player) => (
          <Player name={player.name} score={player.score} />
        ))}
        <Button>End game</Button>
        <Form></Form>

        <h2>Previous Games</h2>
        {initialPreviousGames.map((game) => (
          <History key={game.id} game={game} />
        ))}
      </main>
    </>
  );
}

export default App;
