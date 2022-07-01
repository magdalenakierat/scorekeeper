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

// import styled from "styled-components";

// export default function Player({
//   name,
//   score,
//   onIncrementPlayerScore,
//   onDecrementPlayerScore,
// }) {
//   return (
//     <Wrapper>
//       <Name>{name}</Name>
//       <ButtonMinus
//         aria-label="Decrement Score"
//         onClick={onDecrementPlayerScore}
//       >
//         -
//       </ButtonMinus>
//       <Score>{score}</Score>
//       <ButtonPlus aria-label="Increment Score" onClick={onIncrementPlayerScore}>
//         +
//       </ButtonPlus>
//     </Wrapper>
//   );
// }
