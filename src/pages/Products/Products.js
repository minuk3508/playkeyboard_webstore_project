import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../../components/Header/Header';
import ProductList from '../../components/Products/ProductList.products';
import useFetchCategoryData from '../../hooks/useFetchCategoryData.hooks';
import Footer from '../../components/Footer/Footer';
import theme from '../../theme';

function Products() {
  const { data } = useFetchCategoryData();
  const [category, setCategory] = useState('Free');

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h2>취향대로 골라보기</h2>
        </Title>
        <CategoryBox>
          <CategoryWrap>
            <ul>
              {data?.map((el, index) => {
                return (
                  <Category
                    selected={category === el}
                    key={index + ''}
                    onClick={() => {
                      setCategory(el);
                    }}
                  >
                    {el}
                  </Category>
                );
              })}
            </ul>
          </CategoryWrap>
        </CategoryBox>
        <ProductListBox>
          <ProductList category={category} />
        </ProductListBox>
      </Container>
      <Footer />
    </>
  );
}
export default Products;

const Container = styled.div`
  margin-top: 5px;
  padding: 25px 50px 0;
  @media ${theme.device.tabletL} {
    padding: 0 16px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    width: 1200px;
    padding-top: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #42444c;
    @media ${theme.device.tabletL} {
      font-size: 16px;
      font-weight: 700;
    }
  }
  ${(props) =>
    props.selected &&
    css`
      font-weight: 700;
      color: #ff417d;
      border-bottom: 1px solid #ff417d;
    `}
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryWrap = styled.div`
  padding: 16px 0;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  width: 1200px;
`;

const Category = styled.li`
  display: inline-flex;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: #aaabb3;
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
  ${(props) =>
    props.selected &&
    css`
      font-weight: 700;
      color: #ff417d;
      border-bottom: 1px solid #ff417d;
    `}
  @media ${theme.device.tabletL} {
    font-size: 14px;
    letter-spacing: 0;
  }
`;

const ProductListBox = styled.div`
  display: flex;
  justify-content: center;
`;