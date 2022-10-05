import { useEffect, useState } from 'react';

function useFetchProductList(category) {
  const [themeData, setThemeData] = useState([]);
  useEffect(() => {
    fetch(`https://api.plkey.app/theme?category=${category}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((newData) => {
        setThemeData(newData);
      });
  }, [category]);

  return themeData;
}

export default useFetchProductList;
