import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Montserrat",
        headings: {
          fontWeight: "400",
          fontFamily: "Dela Gothic One",
          sizes: {
            h1: {
              fontSize: "56px",
              lineHeight: "56px"
            },
            h2: {
              fontSize: "48px",
              lineHeight: "48px"
            },
            h3: {
              fontSize: "32px",
              lineHeight: "32px"
            },
            h4: {
              fontSize: "24px",
              lineHeight: "24px"
            }
          }
        },
        fontSizes: {
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
          xl: 18
        }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
