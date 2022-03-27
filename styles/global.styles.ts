import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/ubuntu/v19/4iCs6KVjbNBYlgoKfw72.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/ubuntu/v19/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/ubuntu/v19/4iCv6KVjbNBYlgoCxCvjsGyN.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  } */

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
