import { css, DefaultTheme } from "styled-components";

interface SizeModifierI {
  theme: DefaultTheme;
  loading?: boolean;
}

export default {
  small: ({ theme, loading }: SizeModifierI) => css`
    font-size: ${theme.typeScale.mobile.paragraph};
    padding: 8px 16px;
    ${loading && "padding: 8px 16px 4px 16px;"}
    i.loader {
      font-size: ${theme.typeScale.mobile.sm};
    }
  `,

  large: ({ theme, loading }: SizeModifierI) => css`
    font-size: ${theme.typeScale.mobile.sm};
    padding: 16px 32px;
    ${loading && "padding: 15px 32px 10px 32px;"}
    i.loader {
      font-size: ${theme.typeScale.mobile.xl};
    }
  `,
};
