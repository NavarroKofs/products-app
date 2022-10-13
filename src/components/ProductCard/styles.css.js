import { css } from '@emotion/react'

export const ProductCardStyles = css`
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 6px 1px 19px -12px rgba(0,0,0,0.53);
    -webkit-box-shadow: 6px 1px 19px -12px rgba(0,0,0,0.53);
    -moz-box-shadow: 6px 1px 19px -12px rgba(0,0,0,0.53);
    align-items: center;
    justify-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    background-color: white;
    overflow: hidden;

    .product-price {
        font-size: 0.8vw;
        z-index: 100;
        border-radius: 10%;
        background-color: rgb(127, 40, 196);
        align-self: start;
        justify-self: end;
        color: white;
        padding: .1vw;
    }

    img {
        width: 80%;
        aspect-ratio: 1;

        :hover {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
        }
    }
`