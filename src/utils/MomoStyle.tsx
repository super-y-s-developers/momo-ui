import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global";
import { defaultTheme } from "./themes";

type MomoStyleProps = { children: React.ReactNode; theme: DefaultTheme };

export function MomoStyleWrapper({
  children,
  theme = defaultTheme,
}: MomoStyleProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
