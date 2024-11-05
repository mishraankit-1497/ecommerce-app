import React from "react";
import CollectionPreview from "../../components/collections/collections";
import SHOP_DATA from "./shop-data";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const shopData = category
    ? SHOP_DATA.filter(
        (data) => data.routeName.toLowerCase() === category.toLowerCase()
      )
    : SHOP_DATA;
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
