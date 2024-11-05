import React from "react";
import './collection-item.scss'

const CollectionItem = ({ item }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{}}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
        <button className="custom-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CollectionItem;
