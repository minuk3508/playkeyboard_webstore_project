import React, { useEffect, useState } from "react";
import DetailTemplate from "Template/DetailTemplate";
import ThemeList from "components/Organism/DetailThemeList.organism";
import BottomSection from "components/Organism/DetailBottomSection.organims";
import ProductDetailTop from "components/Organism/DetailTopSection.organism";
import Keyboard from "components/Organism/Keyboard.organism";

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

function DetailPage() {
  const [data, setData] = useState(detailDataInterface);
  const [isModal, setIsModal] = useState(false);
  const mockParams = { id: "6" };
  const { id } = mockParams;

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.plkey.app/theme/${id}`);
      const json = await res.json();
      setData(json.data);
    })();
  }, []);

  const modalToggleFuntion = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <DetailTemplate
      topSectionComponent={
        <ProductDetailTop data={data} isModal={modalToggleFuntion} />
      }
      middleSectionComponent={<ThemeList data={data} />}
      bottomSectionComponet={<BottomSection />}
      modalComponent={<Keyboard isModal={modalToggleFuntion} />}
      modalValue={isModal}
    />
  );
}

export default DetailPage;
