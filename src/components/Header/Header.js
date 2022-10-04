import React from "react";
import styled from "styled-components";
import playKeyboardLogo from "../../images/playKeyboardLogo.png";
import search from "../../images/search.png";
import theme from "../../theme";
function Header() {
  return (
    <Container>
      <Logo src={playKeyboardLogo} alt="" />
      <Glass src={search} alt="" />
    </Container>
  );
}

const Container = styled.div`
  padding: 19px 16px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  @media ${theme.device.mobile} {
    background: red;
  }
`;
const Logo = styled.img`
  width: 136px;
`;
const Glass = styled.img`
  width: 18px;
`;

export default Header;
