import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item";
import "./shop-page.scss";
import { Spin, Typography } from "antd";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/constants";

const ShopPage = () => {
  const [shopData, setShopData] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category");

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const categoryResp = await axios.get(
          `${BASE_URL}/product-categories`
        );
        setCategories(categoryResp.data);
        const res = await axios.get(`${BASE_URL}/shop`);
        let filteredProducts = res.data;
        if (categoryFromUrl) {
          filteredProducts = filteredProducts.filter(
            (product) => product.categoryId == categoryFromUrl
          );
        }
        setShopData(filteredProducts);
      } catch (err) {
        toast.error("Something went wrong!!");
        console.error("Error fetching products", err.message);
      }
    };
    fetchShopData();
  }, [categoryFromUrl]);

  const filteredCategories = categoryFromUrl
    ? categories.filter((category) => category.id == categoryFromUrl)
    : categories;

  return (
    <>
      {filteredCategories.map((category) => (
        <div key={category.id} className="category-section">
          <div className="category-item">
            <Link
              to={`/shop?category=${category.id}`}
              style={{ textDecoration: "none" }}
            >
              <Typography.Title level={2} className="hover-title">
                {category.title.toUpperCase()}
              </Typography.Title>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {categoryFromUrl
              ? shopData
                  .filter((product) => product.categoryId === category.id)
                  .map((product) => <CollectionItem item={product} />)
              : shopData
                  .filter((product) => product.categoryId === category.id)
                  .slice(0, 4)
                  .map((product) => <CollectionItem item={product} />)}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShopPage;
