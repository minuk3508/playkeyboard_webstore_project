import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PreferenceMockData = [
  { emoji: "😊", coment: "맘에들어요", count: 0 },
  { emoji: "😍", coment: "심쿵했어요", count: 0 },
  { emoji: "😉", coment: "응원해요", count: 0 },
  { emoji: "🤣", coment: "갖고싶어요", count: 0 },
];
function BottomSection() {
  const [boxShadowValue, setBoxShadowValue] = useState("0px 0px 6px");

  return (
    <>
      <UserPreferenceWrapper>
        <UserPreferenceBox>
          {PreferenceMockData.map((i, index) => (
            <UserPreference key={index}>
              <UserPreferenceDiv>
                <Emoji>{i.emoji}</Emoji>
                <Coment>{i.coment}</Coment>
                <ComentCount>{i.count}</ComentCount>
              </UserPreferenceDiv>
            </UserPreference>
          ))}
        </UserPreferenceBox>
      </UserPreferenceWrapper>
      <ProductInquiryButtonWrapper>
        <ProductInquiryButtonBox>
          <ProductInquiryButton>상품 문의</ProductInquiryButton>
        </ProductInquiryButtonBox>
        <ProductInquiryButtonEmpty></ProductInquiryButtonEmpty>
      </ProductInquiryButtonWrapper>
      <PurchaseButtonWrapper boxShadowValue={boxShadowValue}>
        <PurchaseButton>
          <PurchaseAndPrice>구매</PurchaseAndPrice>
          <BenefitsDescription>광고제거, 무제한 사용</BenefitsDescription>
        </PurchaseButton>
      </PurchaseButtonWrapper>
    </>
  );
}

export default BottomSection;

const UserPreferenceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 0% 1%;
`;
const UserPreferenceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 100%;
`;
const UserPreference = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
`;
const UserPreferenceDiv = styled.div`
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.colors.grayFontColor};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pink};
  }
`;
const Emoji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  font-size: 2.2rem;
`;
const Coment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 1.3rem;
  font-size: 0.85rem;
`;
const ComentCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: 0.85rem;
  height: 1.3rem;
`;
const ProductInquiryButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.grayLineColor};
`;
const ProductInquiryButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
`;
const ProductInquiryButtonEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
`;
const ProductInquiryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21rem;
  height: 50%;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  color: ${({ theme }) => theme.colors.pink};
  border: 0.25rem solid ${({ theme }) => theme.colors.pink};
  border-radius: 2rem;
  :hover {
    cursor: pointer;
  }
`;
const PurchaseButtonWrapper = styled.div`
  position: fixed;
  bottom: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.35) ${(props) => props.boxShadowValue};
  transition: 0.3s all;
`;
const PurchaseButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  height: 75%;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink};
  border: 0.25rem solid ${({ theme }) => theme.colors.pink};
  border-radius: 2rem;
  :hover {
    cursor: pointer;
  }
`;
const PurchaseAndPrice = styled.div`
  width: auto;
  height: 40%;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const BenefitsDescription = styled.div`
  width: auto;
  height: 30%;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
