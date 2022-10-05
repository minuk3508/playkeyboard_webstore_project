import React from "react";
import styled from "styled-components";

function DetailTemplate({
  topSectionComponent,
  middleSectionComponent,
  bottomSectionComponet,
  modalComponent,
  modalValue,
}) {
  return (
    <Container>
      <TopWrapper>{topSectionComponent}</TopWrapper>
      <MiddleWrapper>{middleSectionComponent}</MiddleWrapper>
      <BottomWrapper>{bottomSectionComponet}</BottomWrapper>
      {modalValue && modalComponent}
    </Container>
  );
}

export default DetailTemplate;

const Container = styled.div`
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
const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 720px;
  height: 67%;
  min-height: 67vh;
  padding: 2% 1%;
`;
const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
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
