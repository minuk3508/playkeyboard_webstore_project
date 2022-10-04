import React from 'react';
import styled from 'styled-components';
import playKeyboardLogo from '../../images/playKeyboardLogo.png';
import search from '../../images/search.png';
import theme from '../../theme';

function Header() {
  return (
    <Container>
      <HeaderBox>
        <LogoBox>
          <img src={playKeyboardLogo} alt="playKeyboardLogo" />
        </LogoBox>
        <SearchBox>
          <img src={search} alt="search" />
        </SearchBox>
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
  background-color: white;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
  @media ${theme.device.tabletL} {
    padding: 63px 16px 0;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 0%);
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

const SearchBox = styled.div`
  img {
    width: 25px;
    @media ${theme.device.tabletL} {
      width: 20px;
    }
  }
`;

export default Header;
