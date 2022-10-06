import styled from "styled-components";

function MainTemplate({
  headerComponent,
  descriptionComponent,
  categoryTabComponent,
  productListComponent,
  footerComponent,
}) {
  return (
    <>
      <HeaderContainer>{headerComponent}</HeaderContainer>
      <Container>
        <DescriptionWrapper>{descriptionComponent}</DescriptionWrapper>
        <CategoryWrapper>{categoryTabComponent}</CategoryWrapper>
        <ProductListWrapper>{productListComponent}</ProductListWrapper>
      </Container>
      <FooterContainer>{footerComponent}</FooterContainer>
    </>
  );
}

export default MainTemplate;

const Container = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    padding: 0 16px;
  }
  margin-top: 5.6rem;
  padding: 2.4rem 0;
`;
const HeaderContainer = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    height: 5.6rem;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 0%);
  }
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 5.7rem;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
`;
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1.58rem;
  padding-left: 1%;
`;
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.7rem;
  padding-left: 1%;
`;
const ProductListWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
const FooterContainer = styled.div`
  display: none;
  justify-content: center;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
  @media ${({ theme }) => theme.device.tabletL} {
    display: flex;
    padding: 5px 35px;
  }
`;
