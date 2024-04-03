import { css } from "styled-components";
import { ComponentProps } from "styled-components-modifiers";

const sizeModifiers = {
  small: ({ theme, loading }: ComponentProps) => css`
    font-size: ${theme.typeScale.mobile.paragraph};
    padding: 8px 16px;
    ${loading && "padding: 8px 16px 4px 16px;"}
    i.loader {
      font-size: ${theme.typeScale.mobile.sm};
    }
  `,

  large: ({ theme, loading }: ComponentProps) => css`
    font-size: ${theme.typeScale.mobile.sm};
    padding: 16px 32px;
    ${loading && "padding: 15px 32px 10px 32px;"}
    i.loader {
      font-size: ${theme.typeScale.mobile.xl};
    }
  `,
};

export default sizeModifiers;
