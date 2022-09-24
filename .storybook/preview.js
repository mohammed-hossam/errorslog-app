import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";
import { NavigationProvider } from "../components/SidebarNavigation/navigation-context";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// added by me to add global styles to storybook
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <GlobalStyle />
          <Story />
        </NavigationProvider>
      </ThemeProvider>
    </>
  ),
  mockRouterDecorator,
];
