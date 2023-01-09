import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontSizes: {
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
          xl: 20
        }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
