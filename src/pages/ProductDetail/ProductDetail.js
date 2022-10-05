import React, { useEffect, useState } from "react";
import ProductDetailTop from "../../components/ProductDetailTop/ProductDetailTop";
import Keyboard from "components/Keyboard";
import styled from "styled-components";
import BottomSection from "./BottomSection";
import ThemeList from "./ThemeList";
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
  const [modalToggle, setModalToggle] = useState(false);
  const mockParams = { id: "6" };
  const { id } = mockParams;

  const handleToggle = () => setModalToggle((prev) => !prev);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.plkey.app/theme/${id}`);
      const json = await res.json();
      setData(json.data);
      // 주석 : props로 내려줄 때 에러가 자꾸 나서 state 저장할 때 처음부터 data로 접근하여 저장하였습니다.
    })();
  }, []);

  return (
    <Container>
      <ProductDetailTop data={data} handleToggle={handleToggle} />
      {data.figure && (
        <MiddleWrapper>
          <ThemeList data={data} />
        </MiddleWrapper>
      )}
      <BottomWrapper>
        <BottomSection />
      </BottomWrapper>
      <Keyboard modalToggle={modalToggle} handleToggle={handleToggle} />
    </Container>
  );
}

export default ProductDetail;

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
