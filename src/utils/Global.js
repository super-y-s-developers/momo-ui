import { createGlobalStyle } from "styled-components";
import { primaryFont, titlesFont, subtitlesFont } from "./typography";
import { defaultTheme } from "./themes";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    // font-size: 14px; //mobile
    font-size: 16px; //desktop
    box-sizing: border-box;

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: ${primaryFont};
      color: ${defaultTheme.textColor};
    }

    main {
      max-width: 90%;
      margin: 0 auto;
    }

    // Titles
    h1, h2, h3, h4, h5, .title {
      font-family: ${titlesFont};
      letter-spacing: 0.04em;
      font-weight: 400;

      &.subtitle {
        font-family: ${subtitlesFont};
        letter-spacing: 0.04em;
        font-weight: 700;
      }
    }
  }
`