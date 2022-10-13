import { css } from '@emotion/react'

export const AppStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat');
    * {
        font-family: 'Montserrat', sans-serif;
    }
    width: 80%;
    height: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .focus {
        border: 1px solid rgb(127, 40, 196);
    }

    .product-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: calc(100% - 6vh);
    }
`