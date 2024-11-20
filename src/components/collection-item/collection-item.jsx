import React from "react";
import "./collection-item.scss";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import { addItemToCart } from "../../features/cart/cartSlice";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{}}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">&#36;{item.price}</span>
        <CustomButton
          className="custom-button"
          onClick={() => dispatch(addItemToCart(item))}
        >
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
