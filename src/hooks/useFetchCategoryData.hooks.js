import { useEffect, useState } from 'react';

function useFetchCategoryData() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch('https://api.plkey.app/theme/category', {
      method: 'GET',

    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  return categoryData;
}

export default useFetchCategoryData;
