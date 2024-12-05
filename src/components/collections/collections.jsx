import React from "react";
import CollectionItem from "../collection-item/collection-item";
import { Link } from "react-router-dom";
import "./collections.scss";

const CollectionPreview = ({ collections }) => {
  
  return (
    <div className="collection-preview">
      <div className="preview">
          <CollectionItem  item={collections} />
      </div>
    </div>
  );
};

export default CollectionPreview;
