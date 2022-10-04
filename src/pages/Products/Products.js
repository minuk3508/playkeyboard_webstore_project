import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  let sch = useLocation().search;
  let query = new URLSearchParams(sch);
  let mainCategory = query.get('category');

  return (
    <>
      <Header />
      <Container>
        <h2>취향대로 골라보기</h2>
        <CategoryBox>
          {categoryList?.map((category, index) => {
            return (
              <ul
                key={index}
                onClick={() => {
                  navigate(`/?category=${category}`);
                }}
              >
                <li className={mainCategory === category && 'active'}>
                  {category}
                </li>
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
  }
  h2 {
    padding: 5px 16px 0;
    font-size: 16px;
    font-weight: 700;
    color: #42444c;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  padding: 16px;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  ul {
    padding-right: 20px;
    display: inline-flex;
    cursor: pointer;
    li {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #aaabb3;
      &.active {
        font-weight: 700;
        color: #ff417d;
        border-bottom: 1px solid #ff417d;
      }
    }
  }
`;
