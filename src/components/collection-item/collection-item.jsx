import React from "react";
import './collection-item.scss'
import CustomButton from "../custom-button/custom-button";

const CollectionItem = ({ item }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{}}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">&#36;{item.price}</span>
        <CustomButton className="custom-button">Add to Cart</CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
