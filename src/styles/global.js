import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }

  input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.primaryLight};
  }

  button {
    cursor: pointer;
  }
`;
