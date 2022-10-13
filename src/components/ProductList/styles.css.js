import { css } from '@emotion/react'

export const ProductListStyles = css`
    width: 100%;
    padding: 1vw;
    border-radius: 5px;
    border: 1px solid #ccc;
    overflow: scroll;
    overflow-x: hidden;

    .infinite-scroll-component {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1vw;
    }

    .loading {
        width: 50px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
`