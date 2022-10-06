import React, { useState } from "react";
import styled from "styled-components";
import useFetchProductList from "../../hooks/useFetchProductList.hook";
import Product from "./Product.products";
import theme from "../../theme";

function ProductList({ category, page, setPage }) {
  const { data } = useFetchProductList(category);

  const limit = 10;
  const offset = (page - 1) * limit;
  const totalProductQty = data?.length;
  const pagesNum = Math.ceil(totalProductQty / limit);

  return (
    <>
      <Container>
        {data?.slice(offset, offset + limit).map((el) => (
          <Product key={el._id} keyboard={el} />
        ))}
        <PageNationBox>
          {Array.from({ length: pagesNum }, (v, i) => (
            <button
              key={i}
              onClick={() => {
                setPage(i + 1);
              }}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
        </PageNationBox>
      </Container>
    </>
  );
}
export default ProductList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
`;
const PageNationBox = styled.div`
  width: 100%;
  padding-top: 20px;
  height: 70px;
  text-align: center;
  button {
    color: ${({ theme }) => theme.colors.gray};
    border: none;
    background-color: white;
    cursor: pointer;
    &[aria-current] {
      color: ${({ theme }) => theme.colors.pink};
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
    @media ${theme.device.tabletL} {
      font-size: 16px;
    }
    @media ${theme.device.mobile} {
      font-size: 12px;
    }
  }
`;
