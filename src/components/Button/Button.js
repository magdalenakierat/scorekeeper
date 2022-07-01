import styled from "styled-components";

export default styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "darkslateblue"};
  border-radius: 15px;
  width: 100%;
  color: white;
  padding: 0.5rem 1rem;
`;
