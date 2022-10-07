import type { AppProps } from "next/app";
import { NavigationProvider } from "@components/SidebarNavigation/navigation-context";
import { GlobalStyle } from "@styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </NavigationProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
