import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Play</StyledLink>
      <StyledLink to="/history">History</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  flex: 1;
  background: lightseagreen;
  text-decoration: none;
  color: white;
  padding: 15px;
  display: grid;
  place-items: center;
  border-radius: 15px;
`;
