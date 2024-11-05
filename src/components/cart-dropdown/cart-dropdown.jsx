import React from "react";
import "./cart-dropdown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <button>Checkout</button>
    </div>
  );
};

export default CartDropDown;
