import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { AiOutlineInbox } from "react-icons/ai";

export default function ThemeList(data) {
  const figuredata = data?.data?.figure;

  return figuredata?.length !== 0 ? (
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
          일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될 수
          있어요.
        </Text>
        <TextLink>이모티콘은 어떻게 전송하나요?</TextLink>
      </TextWrap>
    </ThemeWrap>
  ) : (
    <ThemeWrap>
      <ThemeListWrap>
        <EmptyMessage>
          <AiOutlineInbox size="15rem" />
          Emoticon is empty.
        </EmptyMessage>
      </ThemeListWrap>
    </ThemeWrap>
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
  word-break: keep-all;
`;
const TextLink = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
const EmptyMessage = styled.div`
  @media ${theme.device.tabletL} {
    width: 0%;
    height: 0rem;
    padding-top: 0%;
    font-size: 0rem;
  }
  @media ${theme.device.tablet} {
    width: 0%;
    height: 0rem;
    padding-top: 0%;
    font-size: 0rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 39rem;
  padding-top: 15%;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.grayFontColor};
`;
