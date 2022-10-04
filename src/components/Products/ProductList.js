import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ProductList() {
  const [themeData, setThemeData] = useState([]);
  useEffect(() => {
    fetch('https://api.plkey.app/theme?category=Free', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setThemeData(data);
      });
  }, [setThemeData]);

  const themeList = themeData.data;

  return (
    <Container>
      {themeList?.map((theme, index) => {
        return (
          <div key={index}>
            <img src={theme.imageUrl} alt={theme.name} />
            <span>{theme.name}</span>
            <span>{theme.downloads}</span>
            <span>{theme.price}</span>
          </div>
        );
      })}
    </Container>
  );
}
export default ProductList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
    img {
      width: 300px;
    }
  }
`;
