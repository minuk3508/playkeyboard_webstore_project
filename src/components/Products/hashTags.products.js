import styled from "styled-components";

function HashTags({ length, hashTags }) {
  const sortedHashTags = hashTags.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      return 1;
    }
  });
  return (
    <Wrapper>
      {length < 3
        ? sortedHashTags.map((el, idx) => (
            <HashTag key={idx + ""}>{"#" + el}</HashTag>
          ))
        : sortedHashTags
            .slice(0, 2)
            .map((el, idx) =>
              idx === 1 ? (
                <HashTag key={idx + ""}>
                  {"#" + el + ` 외 ${length - 2}개`}
                </HashTag>
              ) : (
                <HashTag key={idx + ""}>{"#" + el}</HashTag>
              )
            )}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
`;
const HashTag = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #aaabb3;
  & + & {
    margin-left: 2px;
  }
`;
export default HashTags;
