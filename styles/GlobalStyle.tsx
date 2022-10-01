import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
  @font-face {
    font-family: Inter;
    src: url('/fonts/inter.ttf');
    font-display:swap
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: Inter, Sans-Serif;
    
  }
  /* reset some things manually */
  button::-moz-focus-inner
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
  `;
