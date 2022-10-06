import { useEffect, useState } from 'react';

function useFetchProductList(category) {
  const [themeData, setThemeData] = useState([]);
  useEffect(() => {
    fetch(`https://api.plkey.app/theme?category=${category}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setThemeData(data);
      });
  }, [category]);

  return themeData;
}

export default useFetchProductList;
