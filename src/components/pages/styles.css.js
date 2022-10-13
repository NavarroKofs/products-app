import { css } from '@emotion/react'

export const AppStyles = css`
    width: 80%;
    height: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .product-container {
        display: flex;
        width: 100%;
        height: calc(100% - 6vh);
    }
`