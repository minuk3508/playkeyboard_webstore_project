import React from "react";
import styled from "styled-components";

function DetailTemplate({
  headerComponent,
  topSectionComponent,
  middleSectionComponent,
  bottomSectionComponet,
  modalComponent,
  modalValue,
  figureData,
}) {
  return (
    <Container>
      <HeaderContainer>{headerComponent}</HeaderContainer>
      <ResposiveWrapper>
        <TopWrapper>{topSectionComponent}</TopWrapper>

        <MiddleWrapper>
          <MiddleEmptyBox />
          {middleSectionComponent}
        </MiddleWrapper>
      </ResposiveWrapper>
      <BottomWrapper>{bottomSectionComponet}</BottomWrapper>
      {modalComponent}
    </Container>
  );
}

export default DetailTemplate;

const Container = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    padding-top: 10%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 20%;
  }
  @media ${({ theme }) => theme.device.mobileS} {
    padding-top: 26%;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  padding-top: 10%;
  height: auto;
  min-height: 100vh;
`;
const HeaderContainer = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    height: 5.7rem;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 0%);
  }
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 5.7rem;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
  z-index: 2;
`;
const ResposiveWrapper = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: auto;
    min-height: auto;
  }
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
`;
const TopWrapper = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 720px;
    height: auto;
    min-height: auto;
    padding: 2% 5%;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  max-width: 720px;
  height: 67%;
  min-height: 67vh;
  padding: 2%;
`;
const MiddleWrapper = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
    min-height: auto;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: 67%;
  min-height: 67vh;
`;
const MiddleEmptyBox = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    width: 0%;
    min-height: 0rem;
  }
  width: 100%;
  min-height: 5rem;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 33%;
  min-height: 33vh;
`;
