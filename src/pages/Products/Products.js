import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ProductList from '../../components/Products/ProductList';
import theme from '../../theme';

function Products() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch('https://api.plkey.app/theme/category', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);
  const categoryList = categoryData.data;

  return (
    <>
      <Header />
      <Container>
        <h2>취향대로 골라보기</h2>
        <CategoryBox>
          {categoryList?.map((category, index) => {
            return (
              <ul key={index}>
                <li>{category}</li>
              </ul>
            );
          })}
        </CategoryBox>
        <ProductList />
      </Container>
    </>
  );
}
export default Products;

const Container = styled.div`
  margin-top: 5px;
  @media ${theme.device.mobile} {
    background-color: pink;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  ul {
    padding-right: 20px;
    li {
      font-size: 17px;
    }
  }
`;
