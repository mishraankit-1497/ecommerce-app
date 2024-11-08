import React, { useEffect, useState } from "react";
import CollectionPreview from "../../components/collections/collections";
import SHOP_DATA from "./shop-data";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ShopPage = () => {
  const [shopData, setShopData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/shop");
        if (category) {
          const filteredData = shopData.filter(
            (data) => data.routeName.toLowerCase() === category.toLowerCase()
          );
          setShopData(filteredData);
        } else {
          setShopData(res.data);
        }
      } catch (err) {
        console.log("Error fetching", err.message);
      }
    };
    fetchShopData();
  }, [category]);

  return (
    <>
      {shopData.map((data) => (
        <CollectionPreview
          key={data.id}
          collections={
            category ? data : { ...data, items: data.items.slice(0, 4) }
          }
        />
      ))}
    </>
  );
};

export default ShopPage;
