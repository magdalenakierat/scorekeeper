import styled from "styled-components";
import Button from "../Button/Button";

export default function Form() {
  return (
    <FormWrapper>
      <label for="name">Name of player</label>
      <input type="text" id="name" />
      <Button background="green">Add player</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
