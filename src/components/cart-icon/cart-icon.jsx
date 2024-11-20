import { useState } from "react";
import ShoppingBagSvg from "../../assets/bag";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import "./cart-icon.scss";
import { connect } from "react-redux";

const CartIcon = ({ itemCount }) => {
  const [hidden, setHidden] = useState(false);
  const handleDropDown = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div className="cart-icon" onClick={handleDropDown}>
        <ShoppingBagSvg className="shopping-icon" />
        {hidden ? <CartDropDown /> : ""}
        <span className="item-count">{itemCount}</span>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.length,
});
export default connect(mapStateToProps, null)(CartIcon);
