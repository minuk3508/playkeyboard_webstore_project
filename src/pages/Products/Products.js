import { useState } from "react";
import styled, { css } from "styled-components";
import Header from "../../components/Header/Header";
import ProductList from "../../components/Products/productList.products";
import useFetchCategoryData from "../../hooks/useFetchCategoryData.hooks";
// import theme from "../../theme";

function Products() {
  const { data } = useFetchCategoryData();
  const [category, setCategory] = useState("Free");

  return (
    <>
      <Header />
      <Container>
        <h2>취향대로 골라보기</h2>
        <CategoryBox>
          <ul>
            {data?.map((el, index) => {
              return (
                <Category
                  selected={category === el}
                  key={index + ""}
                  onClick={() => {
                    setCategory(el);
                  }}
                >
                  {el}
                </Category>
              );
            })}
          </ul>
        </CategoryBox>
        <ProductList category={category} />
      </Container>
    </>
  );
}
export default Products;

const Container = styled.div`
  padding-top: 2px;
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

  li {
    /* &.active {
      font-weight: 700;
      color: #ff417d;
      border-bottom: 1px solid #ff417d;
    } */
  }
`;
const Category = styled.li`
  display: inline-flex;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
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
`;
//여기서부터 소희님 코드
