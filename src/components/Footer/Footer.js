import React from 'react';
import styled from 'styled-components';
import store from '../../images/store.png';
import charging from '../../images/charging.png';
import heart from '../../images/heart.png';
import settings from '../../images/settings.png';
import theme from '../../theme';

function Footer() {
  const FooterData = [
    { img: store, text: '스토어' },
    { img: charging, text: '충전소' },
    { img: heart, text: 'MY테마' },
    { img: settings, text: '설정' },
  ];

  return (
    <Container>
      <FooterBox>
        {FooterData?.map((data, index) => {
          return (
            <IconBox key={index}>
              <img src={data.img} alt={data.text} />
              <span
                style={{
                  color: 'MY테마' === data.text && '#FF417D',
                }}
              >
                {data.text}
              </span>
            </IconBox>
          );
        })}
      </FooterBox>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  justify-content: center;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
  @media ${theme.device.tabletL} {
    display: flex;
    padding: 5px 35px;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  @media ${theme.device.tabletL} {
    width: 500px;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    width: 24px;
    padding-bottom: 3px;
  }
  span {
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.regular_2};
    color: ${({ theme }) => theme.colors.grayFontColor};
  }
`;

export default Footer;
