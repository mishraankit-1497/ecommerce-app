import { Typography } from "antd";
import CrwnsSvg from "../../assets/crown";
import CartIcon from "../cart-icon/cart-icon";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../features/auth/authSlice";
const { Title } = Typography;
const Header = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const handleAuth = () => {
    if (userId) {
      dispatch(signOut());
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-dark shadow-md">
        <Link to={"/"} className="flex space-x-6 items-center logo-container">
          <CrwnsSvg />
          <Title level={3} style={{ color: "#fff", margin: "0 10px" }}>
            ShopEase
          </Title>
        </Link>
        <div className="flex space-x-6 items-center">
          <div className="option">
            <Link className="text-white hover:text-gray-700" to={"/shop"}>
              SHOP
            </Link>
          </div>
          <div className="option" onClick={handleAuth}>
            <Link className="text-white hover:text-gray-700" to={"/auth"}>
              {!userId ? "SIGN IN" : "SIGN OUT"}
            </Link>
          </div>
          <CartIcon />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
