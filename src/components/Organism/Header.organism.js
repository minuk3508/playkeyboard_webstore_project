import React from "react";
import styled from "styled-components";
import playKeyboardLogo from "../../images/playKeyboardLogo.png";
import search from "../../images/search.png";
import store from "../../images/store.png";
import charging from "../../images/charging.png";
import heart from "../../images/heart.png";
import settings from "../../images/settings.png";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <Container>
      <HeaderBox>
        <LogoBox>
          <img src={playKeyboardLogo} alt="playKeyboardLogo" onClick={goHome} />
        </LogoBox>
        <SearchBox>
          <div>
            <input />
          </div>
          <img src={search} alt="search" />
        </SearchBox>
        <MenuBox>
          <img src={store} alt="store" />
          <img src={charging} alt="charging" />
          <img src={heart} alt="heart" />
          <img src={settings} alt="settings" />
        </MenuBox>
      </HeaderBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 50px 50px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.device.tabletL} {
    padding: 63px 16px 5px;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;

const LogoBox = styled.div`
  img {
    width: 180px;
    cursor: pointer;
    @media ${theme.device.tabletL} {
      width: 136px;
    }
  }
`;

const MenuBox = styled.div`
  cursor: pointer;
  img {
    margin: 0 10px;
    width: 25px;
  }
  @media ${theme.device.tabletL} {
    display: none;
  }
`;

const SearchBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  div {
    border-radius: 5px;
    padding: 5px;
    width: 250px;
    background-color: #f2f2f2;
    margin-right: 10px;
    input:focus {
      outline: none;
    }
    @media ${theme.device.tabletL} {
      display: none;
    }
    input {
      padding-left: 10px;
      border: none;
      width: 240px;
      height: 20px;
      background-color: #f2f2f2;
    }
  }
  img {
    width: 25px;
    @media ${theme.device.tabletL} {
      width: 20px;
    }
  }
`;

export default Header;
