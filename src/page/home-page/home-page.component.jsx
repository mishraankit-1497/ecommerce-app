import { useEffect, useState } from "react";
import MenuItem from "../../components/menu-item/menu-item";
import "./home-page.style.css";
import productCategories from "../product-categories";
import axios from "axios";

const HomePage = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product-categories");
        console.log(res)
        setCategoryData(res.data);
      } catch (err) {
        console.log("Error fetching", err.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="home-page">
      <div className="directory-menu">
        {categoryData?.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
