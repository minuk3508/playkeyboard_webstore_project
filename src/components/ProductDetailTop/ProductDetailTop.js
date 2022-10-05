import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductDetailTop = ({ data }) => {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <TopWrapper>
      <PageBackWrapper>
        <BackBtn onClick={goBack}>
          <BackBtnImg alt="뒤로가기" src="/images/ic_all_back.png" />
        </BackBtn>
      </PageBackWrapper>
      <ItemImageScreenWrapper>
        <ItemImgBox>
          <ItemImg alt="키보드이미지" src={data.imageUrl} />
        </ItemImgBox>
      </ItemImageScreenWrapper>
      <ItemNameWrapper>
        <ItemNameBox>
          <ItemName>{data.name}</ItemName>
          <ShareImgBox>
            <ShareImg alt="공유" src="/images/ic_all_share.png"></ShareImg>
          </ShareImgBox>
        </ItemNameBox>
        <ItemCreatorBox>
          <ItemCreator>{data.creator}</ItemCreator>
        </ItemCreatorBox>
      </ItemNameWrapper>
      <TagButttonWrapper>
        {data.hashtag &&
          data.hashtag.map((el, i) => {
            return (
              <HashtagBox key={i}>
                <HashtagData>{el}</HashtagData>
              </HashtagBox>
            );
          })}
      </TagButttonWrapper>
      <ADSpaceWrapper>AD</ADSpaceWrapper>
    </TopWrapper>
  );
};

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
const PageBackWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
`;

const BackBtn = styled.div`
  width: 18px;
  :hover {
    cursor: pointer;
  }
`;

const BackBtnImg = styled.img`
  width: 100%;
`;

const ItemImageScreenWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const ItemImgBox = styled.div`
  filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.3));
`;

const ItemImg = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ItemNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
`;

const ItemNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #42444c;
`;

const ShareImgBox = styled.div`
  width: 20px;
`;

const ShareImg = styled.img`
  width: 100%;
`;

const ItemCreatorBox = styled.div``;

const ItemCreator = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #919299;
`;

const TagButttonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`;

const HashtagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  margin: 0 0 5px 5px;
  background-color: #ebedf5;
  border-radius: 18px;
`;

const HashtagData = styled.span`
  color: #4b4e57;
  font-size: 14px;
  line-height: 20px;
`;

const ADSpaceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #d9d9d9;
`;

export default ProductDetailTop;
