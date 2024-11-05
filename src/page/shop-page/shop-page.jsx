import React, { useEffect, useState } from "react";
import CollectionPreview from "../../components/collections/collections";
import SHOP_DATA from "./shop-data";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const params = useParams();
  const shopData = params?.routeName
    ? SHOP_DATA.filter((x) => x.routeName == params.routeName)
    : SHOP_DATA;

  return (
    <>
      {shopData.map((data) => (
        <CollectionPreview key={data.id} collections={data} />
      ))}
    </>
  );
};

export default ShopPage;
