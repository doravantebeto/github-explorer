import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }
  body{
    background: #F0F0F5 url(${background}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font:16px Roboto, sans-serif;
  }
  #root {
    max-width:960px;
    margin: 0px auto;
    padding: 40px 20px;
  }
  button {
    cursor: pointer;
  }
`;
