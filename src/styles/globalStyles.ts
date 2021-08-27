import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --main-card-color: #4DFAD7;
  --main-bg-color: #3EAD97;
  --main-btn-color: #F366FA;
  --main-btn-success-color: #FADD7F;
  --main-border-color: #A736AD;
}
  body {
    margin: 0;
    padding: 0;
    background: var(--main-bg-color);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h1, h2, h3, h4, h5, h6, button, input {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
