import MenuItem from "../../components/menu-item/menu-item";
import "./home-page.style.css";
const HomePage = ({ productCategories }) => {
  return (
    <div className="home-page">
      <div className="directory-menu">
        {productCategories.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
