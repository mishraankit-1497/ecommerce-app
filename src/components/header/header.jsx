import "./header.scss";
import CrwnsSvg from "../../assets/crown";
import CartIcon from "../cart-icon/cart-icon";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="logo-container">
        <CrwnsSvg />
      </div>
      <div className="options">
        <div className="option"><Link to={"/shop"}>SHOP</Link></div>
        <div className="option">
          <Link to={"/signin"}>SIGN IN</Link>
        </div>
        <div className="option">CONTACT</div>
        <CartIcon />
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Header;
