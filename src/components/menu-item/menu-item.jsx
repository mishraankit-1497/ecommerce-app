import { Link } from "react-router-dom";

const MenuItem = ({ product }) => {
  const { title, imageUrl, id } = product;

  return (
    <div className="relative group min-w-[30%] h-60 sm:h-96 lg:h-[380px] flex flex-col items-center justify-center border border-black mx-[7.5px] mb-[15px] overflow-hidden hover:cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-xl font-bold text-white mb-1">{title.toUpperCase()}</div>
        <Link to={`/shop?category=${id}`}>
          <div className="text-lg font-light text-white">Shop Now</div>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
