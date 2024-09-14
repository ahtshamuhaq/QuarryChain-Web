import { createGlobalStyle } from "styled-components";
import { AppTheme } from "../";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    ::-webkit-scrollbar { 
    width: 0;
    height: 0;
    }
  }
  
  body {
    background: ${AppTheme.colors.neutral[0]};
    font-family: ${AppTheme.fonts.standard};
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
