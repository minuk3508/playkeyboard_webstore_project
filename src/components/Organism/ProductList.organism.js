import React from "react";
import styled from "styled-components";
import useFetchProductList from "../../APIhooks/useFetchProductList.hook";
import Product from "../Molecules/Product.molecules";
import Pagination from "components/Molecules/Pagination.molecules";

function ProductList({ page, setPage, category }) {
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
        <Pagination totalPage={pagesNum} page={page} setPage={setPage} />
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
