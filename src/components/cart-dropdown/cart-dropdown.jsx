import React from "react";
import "./cart-dropdown.scss";
import { useSelector } from "react-redux";
import { CartItem } from "../cart-item/cart-item";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length &&
          cartItems.map((item) => (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
      </div>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default CartDropDown;
