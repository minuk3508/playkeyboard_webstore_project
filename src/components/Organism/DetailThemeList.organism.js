import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export default function ThemeList(data) {
  const figuredata = data.data.figure;

  return (
    figuredata && (
      <ThemeWrap>
        <ThemeListWrap>
          {figuredata?.map((img, index) => (
            <Theme key={index}>
              <ThemeImg src={img.imageUrl} />
            </Theme>
          ))}
        </ThemeListWrap>
        <TextWrap>
          <Text>
            일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될
            수 있어요.
          </Text>
          <TextLink>이모티콘은 어떻게 전송하나요?</TextLink>
        </TextWrap>
      </ThemeWrap>
    )
  );
}

const ThemeWrap = styled.div`
  width: 80%;
  height: 100%;

  @media ${theme.device.tabletL} {
    width: 80%;
    height: 100%;
  }
  @media ${theme.device.tablet} {
    width: 90%;
    height: 100%;
  }
`;
const ThemeListWrap = styled.ul`
  @media ${theme.device.tabletL} {
    width: auto;
    height: auto;
  }
  @media ${theme.device.tablet} {
    width: auto;
    height: auto;
  }
  margin: 10px;
  height: 39rem;
  overflow: hidden;
  overflow-y: auto;
`;
const Theme = styled.li`
  display: inline-block;
  width: 33%;
  margin-bottom: 15px;
`;
const ThemeImg = styled.img`
  width: 100%;
`;
const TextWrap = styled.div`
  width: 100%;
`;
const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayFontColor};
  padding: 8px 16px;
  line-height: 1.75;
`;
const TextLink = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
