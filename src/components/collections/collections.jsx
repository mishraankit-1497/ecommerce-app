import React from "react";
import CollectionItem from "../collection-item/collection-item";
import { Link } from "react-router-dom";
import "./collections.scss";

const CollectionPreview = ({ collections }) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop?category=${collections.routeName}`}>
        <h1>{collections.title}</h1>
      </Link>
      <div className="preview">
        {collections?.items?.map((collection, index) => (
          <CollectionItem key={collection.id} item={collection} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
