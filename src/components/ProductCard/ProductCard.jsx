import React from "react";
import { ProductCardStyles } from "./styles.css";

const ProductCard = ({ productImg, productId, onClickHandler = () => {} }) => {
  return (
    <figure css={ProductCardStyles} onClick={() => onClickHandler(productId)}>
      <img src={productImg} />
    </figure>
  );
};

export default ProductCard;
