import { createGlobalStyle, css } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  // -------- CUSTOM STYLES --------- //

  ${({ theme }) => css`
    html {
      font-size: ${theme.typeScale.mobile.basePx};
      box-sizing: border-box;

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        font-family: ${theme.fonts.body};
        color: ${theme.textColor.main};
        background-color: ${theme.backgroundColor};
      }

      main {
        max-width: 90%;
        margin: 0 auto;
      }

      // Titles
      h1,
      h2,
      h3,
      h4,
      h5,
      .title {
        font-family: ${theme.fonts.titles};
        letter-spacing: 0.04em;
        font-weight: 400;

        &.subtitle {
          font-family: ${theme.fonts.subtitles};
          letter-spacing: 0.04em;
          font-weight: 700;
        }
      }
      h1 {
        font-size: ${theme.typeScale.mobile.xl};
      }
      h2 {
        font-size: ${theme.typeScale.mobile.lg};
      }
      h3 {
        font-size: ${theme.typeScale.mobile.md};
      }
      h4 {
        font-size: ${theme.typeScale.mobile.sm};
      }
      h5 {
        font-size: ${theme.typeScale.mobile.xs};
      }
    }
  `}

  // ------------ FONTS ------------- //

  // FredokaOne for the titles
  @font-face {
    font-family: FredokaOne;
    src: local(FredokaOne-Regular),
      url(/fonts/FredokaOne/FredokaOne-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  // Quicksand for the subtitles
  @font-face {
    font-family: Quicksand;
    src: local(Quicksand-Regular),
      url(/fonts/Quicksand/Quicksand-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Quicksand;
    src: local(Quicksand-Bold),
      url(/fonts/Quicksand/Quicksand-Bold.ttf) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }

  // NunitoSans for the texts
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-Light),
      url(/fonts/NunitoSans/NunitoSans-Light.ttf) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-Regular),
      url(/fonts/NunitoSans/NunitoSans-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-SemiBold),
      url(/fonts/NunitoSans/NunitoSans-SemiBold.ttf) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-Bold),
      url(/fonts/NunitoSans/NunitoSans-Bold.ttf) format("truetype");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }
`;
