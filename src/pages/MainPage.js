import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchCategoryData from '../APIhooks/useFetchCategoryData.hook';
import MainTopDescription from 'components/Atoms/MainTopDescription.atom';
import Header from 'components/Organism/Header.organism';
import MainTemplate from 'Template/MainTemplate';
import CategoryTap from 'components/Molecules/CategoryTab.molecules';
import ProductList from 'components/Organism/ProductList.organism';
import Footer from 'components/Organism/Footer.oranism';

function MainPage() {
  const { data } = useFetchCategoryData();
  const [category, setCategory] = useState('Free');

  const query = new URLSearchParams(useLocation().search);
  const selectedCategory = query.get('category');

  return (
    <MainTemplate
      headerComponent={<Header />}
      descriptionComponent={<MainTopDescription />}
      categoryTabComponent={
        <CategoryTap
          data={data}
          giveMeSelectedCategory={(item) => {
            setCategory(item);
          }}
          selectedCategory={selectedCategory}
        />
      }
      productListComponent={
        <ProductList category={category} selectedCategory={selectedCategory} />
      }
      footerComponent={<Footer />}
    />
  );
}

export default MainPage;
