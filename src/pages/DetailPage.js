import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DetailTemplate from "Template/DetailTemplate";
import ThemeList from "components/Organism/DetailThemeList.organism";
import BottomSection from "components/Organism/DetailBottomSection.organims";
import ProductDetailTop from "components/Organism/DetailTopSection.organism";
import Keyboard from "components/Organism/Keyboard.organism";
import Header from "components/Organism/Header.organism";
import useFetchProductData from "APIhooks/useFetchProductData.APIhooks";

function DetailPage() {
  const [isModal, setIsModal] = useState(false);
  const { id } = useParams();
  const data = useFetchProductData(id);
  const modalToggleFuntion = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <DetailTemplate
      headerComponent={<Header />}
      topSectionComponent={
        <ProductDetailTop data={data} isModal={modalToggleFuntion} />
      }
      middleSectionComponent={<ThemeList data={data} />}
      bottomSectionComponet={<BottomSection />}
      modalComponent={<Keyboard state={isModal} isModal={modalToggleFuntion} />}
      modalValue={isModal}
    />
  );
}

export default DetailPage;
