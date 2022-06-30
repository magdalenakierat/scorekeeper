import styled from "styled-components";

export default styled.button`
  background-color: ${(props) =>
    props.background === "red" ? "red" : "indigo"};
  border-radius: 5px;
  width: 100%;
  color: white;
  padding: 0.5rem 1rem;
`;
