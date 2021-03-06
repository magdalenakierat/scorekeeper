import Button from "../components/Button/Button.js";
import Player from "../components/Player/Player.js";
import Form from "../components/Form/Form.js";

export default function HomePage({ players }) {
  return (
    <>
      <h2>Game</h2>

      {players.map((player) => (
        <Player key={player.id} name={player.name} score={player.score} />
      ))}
      <Button>End game</Button>
      <Form></Form>
    </>
  );
}
