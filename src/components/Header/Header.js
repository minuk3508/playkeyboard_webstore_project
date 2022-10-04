import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <LogoBox>
        <img
          src="https://plkey.app/assets/images/logo.png"
          alt="playkey board logo"
        />
      </LogoBox>
      <SearchBox>
        <img
          src="https://img.icons8.com/ios-glyphs/344/search--v1.png"
          alt="search icon"
        />
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
`;

const LogoBox = styled.div`
  img {
    width: 140px;
  }
`;

const SearchBox = styled.div`
  img {
    width: 20px;
  }
`;

export default Header;
