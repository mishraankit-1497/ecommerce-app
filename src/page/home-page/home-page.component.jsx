import { useEffect, useState } from "react";
import MenuItem from "../../components/menu-item/menu-item";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";

const HomePage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/product-categories`);
        setCategoryData(res.data);
      } catch (err) {
        console.log("Error fetching", err.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="home-page">
      <div
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] text-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('https://your-image-url.com')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Welcome to Our Store
          </h1>
          <p className="mt-4 text-xl text-gray-400 sm:text-2xl">
            Discover the best products at amazing prices!
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-8 bg-blue-500 text-white px-8 py-3 text-lg rounded-full hover:bg-blue-600 transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl text-gray-400 font-bold text-center mb-8">
          Browse Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryData?.map((product) => (
            <MenuItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
