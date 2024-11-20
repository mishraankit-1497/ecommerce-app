import React, { useEffect, useState } from "react";
import axios from "axios";
import CollectionItem from "../../components/collection-item/collection-item";
import CollectionPreview from "../../components/collections/collections";
const ShopPage = () => {
  const [shopData, setShopData] = useState([]);
  const [categories, setCategories] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category");

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const categoryResp = await axios.get(
          "http://localhost:3000/product-categories"
        );
        const res = await axios.get("http://localhost:3000/shop");
        setCategories(categoryResp.data);
        const products = res.data;
        let filteredProducts = products;
        if (categoryFromUrl) {
          filteredProducts = products.filter(
            (product) => product.categoryId == parseInt(categoryFromUrl)
          );
        }
        setShopData(filteredProducts);
      } catch (err) {
        console.log("Error fetching", err.message);
      }
    };
    fetchShopData();
  }, [categoryFromUrl, shopData]);

  return (
    <>
      {shopData.map((data) => (
        <>
          <CollectionPreview
            key={data.id}
            collections={data}
            category={categories.find((c) => c.id == data.categoryId)}
          />
        </>
      ))}
    </>
  );
};

export default ShopPage;
