import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }
  body {
    background: #e5e5e5;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }
`;