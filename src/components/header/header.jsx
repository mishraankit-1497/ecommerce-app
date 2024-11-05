import "./header.scss";
import CrwnsSvg from "../../assets/crown";
import CartIcon from "../cart-icon/cart-icon";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <CrwnsSvg />
      </div>
      <div className="options">
        <div className="option">SHOP</div>
        <div className="option">SIGN IN</div>
        <div className="option">CONTACT</div>
        <CartIcon />
      </div>
    </div>
  );
};

export default Header;
