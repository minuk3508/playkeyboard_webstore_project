import React, { useEffect, useState } from "react";
import styled from "styled-components";

const detailDataInterface = {
  data: {
    bannerEvent: String,
    bannerImageUrl: String,
    brandAction: String,
    brandDescription: String,
    brandImageUrl: String,
    brandMaximumDownload: Number,
    brandType: String,
    buyActions: Array,
    category: Array,
    color: Array,
    createdAt: String,
    creator: String,
    designStoryContent: String,
    designStoryTitle: String,
    downloadKey: String,
    downloads: Number,
    figure: [{ keyword: String, text: String, imageUrl: String }],
    hashtag: Array,
    hide: Boolean,
    imageUrl: String,
    images: Array,
    isBuy: Boolean,
    isFreeUse: Boolean,
    isLiveTheme: Boolean,
    isNew: Boolean,
    isNewTheme: Boolean,
    isOnlyBuy: Boolean,
    isOnlyStore: Boolean,
    lang: String,
    localDownloadBuffer: Number,
    localDownloads: Number,
    localFreeUseCount: Number,
    localFreeUseCountBuffer: Number,
    maximumIOSVersion: Number,
    maximumVersion: Number,
    minimulIOSVersion: Number,
    minimulVersion: Number,
    mood: Array,
    name: String,
    officialRecommendPriorities: null,
    officialRecommendPriority: Number,
    paymentType: String,
    platform: Array,
    price: Number,
    priority: Number,
    randomPriority: Number,
    recommend: Boolean,
    recommendPriority: Number,
    relatedKeyword: Array,
    requireVersion: Number,
    reviewNoticeContent: String,
    reviewNoticeTitle: String,
    reviewPlaceholder: String,
    sale: Number,
    specialImageUrl1: String,
    specialImageUrl2: String,
    testImageUrls: Array,
    testcase: Array,
    themeId: String,
    updatedAt: String,
    usedPaymentBuffer: Number,
    versionBranches: Array,
    __v: Number,
    _id: String,
  },
};

function ProductDetail() {
  const [data, setData] = useState(detailDataInterface);
  const mockParams = { id: "6" };
  const { id } = mockParams;
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.plkey.app/theme/${id}`);
      const json = await res.json();
      console.log(json);
      setData(json);
    })();
  }, []);
  console.log(data);
  return (
    <Container>
      <TopWrapper>
        <PageBackWrapper>back</PageBackWrapper>
        <ItemImageScreenWrapper>img</ItemImageScreenWrapper>
        <ItemNameWrapper>name</ItemNameWrapper>
        <TagButttonWrapper>tag</TagButttonWrapper>
        <ADSpaceWrapper>ad</ADSpaceWrapper>
      </TopWrapper>
      {true && <MiddleWrapper>middle</MiddleWrapper>}
      <BottomWrapper>
        <UserPreferenceWrapper>UserPreference</UserPreferenceWrapper>
        <ProductInquiryButtonWrapper>
          ProductInquiry
        </ProductInquiryButtonWrapper>
        <PurchaseButtonWrapper>Purchase</PurchaseButtonWrapper>
      </BottomWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: auto;
  min-height: 100vh;
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 67%;
  min-height: 67vh;
  padding: 2% 1%;
  border: 1px solid black;
`;
const PageBackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  background-color: rgba(235, 64, 52, 0.2);
`;
const ItemImageScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  border: 1px solid black;
  background-color: rgba(128, 76, 212, 0.2);
`;
const ItemNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 1px solid black;
  background-color: rgba(71, 158, 75, 0.2);
`;
const TagButttonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  background-color: rgba(204, 198, 90, 0.2);
`;
const ADSpaceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  border: 1px solid black;
  background-color: rgba(75, 84, 184, 0.2);
`;
const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vw;
  border: 1px solid black;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 33%;
  min-height: 33vh;
  padding: 0% 1%;
  border: 1px solid black;
`;
const UserPreferenceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  border: 1px solid black;
  background-color: rgba(82, 82, 82, 0.2);
`;
const ProductInquiryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 1px solid black;
  background-color: rgba(24, 204, 240, 0.2);
`;
const PurchaseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 1px solid black;
  background-color: rgba(252, 173, 0, 0.2);
`;

export default ProductDetail;
