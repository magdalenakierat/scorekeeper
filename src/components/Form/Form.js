import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";

export default function Form({ onCreateGame }) {
  const [nameOfGame, setNameOfGame] = useState("");
  const [playerName, setPlayerName] = useState("");

  const disabled = nameOfGame === "" || playerName === "";

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new game</h2>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. scribble.io"
        value={nameOfGame}
        onChange={(event) => setNameOfGame(event.target.value)}
        required
      />
      <Input
        name="playerName"
        labelText="Player names"
        placeholder="e.g Jane, John"
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
        required
      />
      <Button disabled={disabled}>Create Game</Button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onCreateGame({
      nameOfGame,
      playerName: playerName.split(",").map((name) => name.trim()),
    });
    setNameOfGame("");
    setPlayerName("");
  }
}
