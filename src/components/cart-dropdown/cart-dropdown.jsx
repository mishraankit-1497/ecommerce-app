import React from "react";
import "./cart-dropdown.scss";
import { useSelector } from "react-redux";
import { CartItem } from "../cart-item/cart-item";
import { Link } from "react-router-dom";
import { Button, Divider, Typography } from "antd";
import CustomButton from "../custom-button/custom-button";

const { Text } = Typography;

const CartDropDown = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <Text type="secondary">Your cart is empty</Text>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <Divider />
      <Link to="/checkout">
        <CustomButton className="btn-active" block>
          Checkout
        </CustomButton>
      </Link>
    </div>
  );
};

export default CartDropDown;
