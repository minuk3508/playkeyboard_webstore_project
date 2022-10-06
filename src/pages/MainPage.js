import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchCategoryData from "../APIhooks/useFetchCategoryData.hook";
import MainTopDescription from "components/Atoms/MainTopDescription.atom";
import Header from "components/Organism/Header.organism";
import MainTemplate from "Template/MainTemplate";
import CategoryTap from "components/Molecules/CategoryTab.molecules";
import ProductList from "components/Organism/ProductList.organism";
import Footer from "components/Organism/Footer.oranism";

function MainPage() {
  const { data } = useFetchCategoryData();
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const category = query.get("category") || "Free";

  return (
    <MainTemplate
      headerComponent={<Header />}
      descriptionComponent={<MainTopDescription />}
      categoryTabComponent={
        <CategoryTap
          data={data}
          category={category}
          setQuery={setQuery}
          setPage={setPage}
        />
      }
      productListComponent={
        <ProductList category={category} page={page} setPage={setPage} />
      }
      footerComponent={<Footer />}
    />
  );
}

export default MainPage;
