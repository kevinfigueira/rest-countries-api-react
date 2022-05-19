import styled, { createGlobalStyle } from "styled-components";

//FONTS

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${c => c.theme.colors.bg_2};
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background: transparent;
    border: none;
    cursor: pointer;
}
`;

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`; 

export default GlobalStyle;