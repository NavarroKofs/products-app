import React from "react";
import { ProductCardStyles } from "./styles.css";

const ProductCard = ({
  productImg,
  productId,
  productPrice,
  onClickHandler = () => {},
}) => {
  return (
    <figure css={ProductCardStyles} onClick={() => onClickHandler(productId)}>
      <p className="product-price">${productPrice}.00</p>
      <img src={productImg} />
    </figure>
  );
};

export default ProductCard;
