import React from "react";
import { ProductDetailsStyles } from "./styles.css";

const ProductDetails = ({ title, sku, description, price, img }) => {
  const formatText = (text) => {
    text = text.replace("√©", "é");
    text = text.replace("√°", "á");
    text = text.replace("√≠", "í");
    text = text.replace("√≥", "ó");
    text = text.replace("√∫", "ú");
    text = text.replace("√±", "ñ");
    return text;
  };

  return (
    <figure css={ProductDetailsStyles}>
      {img ? <img className="product-img" src={img} /> : ""}
      {title ? <h3>{formatText(title)}</h3> : ""}
      {price ? <h3 className="product-price">${price}.00</h3> : ""}
      {sku ? <p>SKU: {sku}</p> : ""}
      {description ? (
        <div
          dangerouslySetInnerHTML={{ __html: formatText(description) }}
        ></div>
      ) : (
        ""
      )}
    </figure>
  );
};

export default ProductDetails;
