import { useState } from "react";
import ShoppingBagSvg from "../../assets/bag";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import "./cart-icon.scss";

const CartIcon = () => {
  const [hidden, setHidden] = useState(false);

  const handleDropdown = () => {
    setHidden(!hidden);
  };

  return (
    <div className="cart-icon" onClick={handleDropdown}>
      <ShoppingBagSvg className="shopping-icon" />
      {hidden && <CartDropDown />}
    </div>
  );
};

export default CartIcon;
