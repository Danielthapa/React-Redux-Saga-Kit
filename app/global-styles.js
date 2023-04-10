import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  body.fontLoaded {
    font-family:  'Inter', sans-serif;
  }

  button {
    outline: none;
    background: none;
    border: none;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family:  'Inter', sans-serif;
    line-height: 1.5em;
    margin: 0;
  }

  section, div {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
