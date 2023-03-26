import { ConnectKitProvider } from "connectkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";
import "src/styles.css";

import { client } from "../wagmi";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme="retro">
          <NextHead>
            <title>SendETH</title>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="images/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="images/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="images/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
          </NextHead>
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
