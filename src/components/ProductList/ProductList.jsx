import React from "react";
import ProductCard from "../ProductCard";
import endIcon from "../../assets/end.png";
import { ProductListStyles } from "./styles.css";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductList = ({
  products = [],
  onClickHandler = () => {},
  onEndScroll = () => {},
  scroll = true,
}) => {
  return (
    <div id="scrollable-div" css={ProductListStyles}>
      <InfiniteScroll
        dataLength={products.length}
        next={onEndScroll}
        hasMore={scroll}
        initialScrollY={200}
        endMessage={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ textAlign: "center", fontSize: "0.8vw" }}>
              <b>Yay! You have seen it all</b>
            </p>
            <img style={{ width: "30%", margin: "0 auto" }} src={endIcon} />
          </div>
        }
        scrollableTarget="scrollable-div"
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              productImg={product.img}
              productId={product.id}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
