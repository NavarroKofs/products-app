import { css } from '@emotion/react'

export const ProductDetailsStyles = css`
    width: 30%;
    padding: 0.5vw;
    overflow-x: hidden;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 0;
    font-size: 0.8vw;
    background-color: white;

    .product-img {
        width: 100%;
    }

    .product-price {
        background-color: rgb(127, 40, 196);
        border-radius: 0.5rem;
        display: block;
        width: max-content;
        padding: 0.2vw;
        color: rgb(255, 255, 255);
    }
`