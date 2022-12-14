import styled, { css } from "styled-components";

function CategoryTap({ data, category, setQuery, setPage }) {
  return (
    <CategoryBox>
      <ul>
        {data?.slice(1).map((el, index) => {
          return (
            <Category
              selected={category === el}
              key={index}
              onClick={() => {
                setQuery({ category: el });
                setPage(1);
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
