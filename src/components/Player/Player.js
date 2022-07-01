import styled from "styled-components";
import Counter from "../Counter/Counter";

export default function Player({ name }) {
  return (
    <PlayerWrapper>
      {name}
      <PlayerScore>
        <Counter />
      </PlayerScore>
    </PlayerWrapper>
  );
}

const PlayerScore = styled.div`
  color: black;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
