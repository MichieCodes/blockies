import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }  

  html {
    font-size: 62.5%;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Helvetica Neue, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
