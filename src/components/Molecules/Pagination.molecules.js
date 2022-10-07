import styled from 'styled-components';

function Pagination({ totalPage, page, setPage }) {
  let start;
  const divide = page / 10;
  const extra = page % 10;
  if (extra) {
    start = Math.floor(divide) * 10 + 1;
  } else {
    if (divide === 1) {
      start = Math.floor(divide);
    } else {
      start = page - 9;
    }
  }
  const end = Math.min(start + 9, totalPage);
  const pages = [];
  if (start !== 1) {
    pages.push({ pageNum: 1, pageVal: 1 });
    pages.push({ pageNum: start - 1, pageVal: '...' });
  }
  for (let i = start; i <= end; i++) {
    pages.push({ pageNum: i, pageVal: i });
  }
  if (end !== totalPage) {
    pages.push({ pageNum: end + 1, pageVal: '...' });
    pages.push({ pageNum: totalPage, pageVal: totalPage });
  }

  function prev() {
    setPage((prev) => (prev === 1 ? prev : prev - 1));
  }
  function next() {
    setPage((prev) => (prev === totalPage ? prev : prev + 1));
  }

  return (
    <Wrapper>
      <Prev onClick={prev} show={page !== 1}>
        이전
      </Prev>
      <div style={{ display: 'flex' }}>
        {pages.map((el) => (
          <Pagebox
            key={el.pageVal}
            onClick={() => {
              setPage(el.pageNum);
            }}
            active={page === el.pageNum}
          >
            {el.pageVal}
          </Pagebox>
        ))}
      </div>
      <Next onClick={next} show={page !== totalPage}>
        다음
      </Next>
    </Wrapper>
  );
}

const Pagebox = styled.button`
  background-color: ${(props) =>
    props.active ? props.theme.colors.hotPink : 'white'};
  color: ${(props) => (props.active ? 'white' : 'black')};
  min-width: 30px;
  padding: 7px 0px;
  width: 100%;
  text-align: center;
  border: 1px solid #ff1c7c;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid #ff1c7c;
  }
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 20px;
    margin-right: 2px;
    font-size: 10px;
    padding: 4px 0px;
  }
  @media ${({ theme }) => theme.device.mobileS} {
    min-width: 15px;
    padding: 2px 0px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Prev = styled.button`
  background-color: white;
  border: 1px solid #b8b8b8;
  border-radius: 4px;
  font-size: 12px;
  min-height: 30px;
  &:hover {
    cursor: pointer;
    border: 1px solid #ff1c7c;
  }
  opacity: ${(props) => (props.show ? '1' : '0')};
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 8px;
    min-height: 25px;
    width: 34px;
    margin: 0 5px;
  }
  @media ${({ theme }) => theme.device.mobileS} {
    min-height: 20px;
    width: 32px;
    margin: 0px 1px;
  }
`;
const Next = styled(Prev)`
  opacity: ${(props) => (props.show ? '1' : '0')};
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
`;

export default Pagination;
