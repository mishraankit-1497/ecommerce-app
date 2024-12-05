import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { Badge } from "antd";

const CartIcon = ({ itemCount }) => {
  const [hidden, setHidden] = useState(false);
  const handleDropDown = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div className="cart-icon" onClick={handleDropDown}>
        <Badge count={itemCount}>
          <ShoppingCartOutlined style={{ fontSize: '24px', color: "#fff" }}/>
        </Badge>
        {hidden ? <CartDropDown /> : ""}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.length,
});
export default connect(mapStateToProps, null)(CartIcon);
