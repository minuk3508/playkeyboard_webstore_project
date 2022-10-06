import styled, { css } from "styled-components";
import { useState } from "react";

function CategoryTap({ data, giveMeSelectedCategory }) {
  const [category, setCategory] = useState("Free");
  return (
    <CategoryBox>
      <ul>
        {data?.map((el, index) => {
          return (
            <Category
              selected={category === el}
              key={index + ""}
              onClick={() => {
                setCategory(el);
                giveMeSelectedCategory(el);
              }}
            >
              {el}
            </Category>
          );
        })}
      </ul>
    </CategoryBox>
  );
}

export default CategoryTap;

const CategoryBox = styled.div`
  padding: 16px 0;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  width: 1200px;
`;
const Category = styled.li`
  @media ${({ theme }) => theme.device.tabletL} {
    font-size: 14px;
    letter-spacing: 0;
  }
  display: inline-flex;
  cursor: pointer;
  letter-spacing: 0.5px;
  line-height: 24px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray};
  &:last-child {
    margin-right: 0px;
  }
  ${(props) =>
    props.selected &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.pink};
      border-bottom: 1px solid ${({ theme }) => theme.colors.pink};
    `}
`;
