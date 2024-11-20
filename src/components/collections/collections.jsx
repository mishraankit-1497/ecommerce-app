import React from "react";
import CollectionItem from "../collection-item/collection-item";
import { Link } from "react-router-dom";
import "./collections.scss";

const CollectionPreview = ({ collections, category }) => {
  
  return (
    <div className="collection-preview">
      <Link to={`/shop?category=${collections.categoryId}`}>
        <h1>{category.title}</h1>
      </Link>
      <div className="preview">
          <CollectionItem  item={collections} />
      </div>
    </div>
  );
};

export default CollectionPreview;
