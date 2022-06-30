import History from "./History";

const exampleGame = {
  id: "1kdjei92e",
  players: [
    {
      id: "018237412dde",
      name: "John",
      score: 42,
    },
    {
      id: "dkdi28dhdnew",
      name: "Jane",
      score: 43,
    },
    {
      id: "ldke29dn292nd2",
      name: "Jim",
      score: 39,
    },
  ],
};

export default {
  title: "History",
  component: History,
};

export const Default = () => <History game={exampleGame} />;
