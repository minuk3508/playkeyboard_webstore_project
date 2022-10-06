import styled from "styled-components";

function MainTopDescription() {
  return <Container>취향대로 골라보기</Container>;
}

export default MainTopDescription;

const Container = styled.h2`
  @media ${({ theme }) => theme.device.tabletL} {
    font-size: 1rem;
  }
  width: 75rem;
  padding-top: 0.3rem;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black_2};
`;
