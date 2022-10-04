import React from 'react';
import styled from 'styled-components';
import playKeyboardLogo from '../../images/playKeyboardLogo.png';
import search from '../../images/search.png';
import theme from '../../theme';

function Header() {
  return (
    <Container>
      <LogoBox>
        <img src={playKeyboardLogo} alt="playKeyboardLogo" />
      </LogoBox>
      <SearchBox>
        <img src={search} alt="search" />
      </SearchBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 50px 50px 0;
  @media ${theme.device.tabletL} {
    padding: 63px 16px 0;
  }
`;

const LogoBox = styled.div`
  img {
    width: 180px;
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
