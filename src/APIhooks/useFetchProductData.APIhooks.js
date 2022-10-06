import { useEffect, useState } from "react";

function useFetchProductData(id) {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetch(`https://api.plkey.app/theme/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.data);
      });
  }, [id]);

  return productData;
}

export default useFetchProductData;
