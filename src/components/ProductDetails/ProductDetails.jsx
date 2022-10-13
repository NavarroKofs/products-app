import React from "react";
import { ProductDetailsStyles } from "./styles.css";

const ProductDetails = ({ title, sku, description, price, img }) => {
  return (
    <figure css={ProductDetailsStyles}>
      {img ? <img className="product-img" src={img} /> : ""}
      {title ? <h3>{title}</h3> : ""}
      {price ? <h3>${price}.00</h3> : ""}
      {sku ? <p>SKU: {sku}</p> : ""}
      {description ? (
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      ) : (
        ""
      )}
    </figure>
  );
};

export default ProductDetails;
