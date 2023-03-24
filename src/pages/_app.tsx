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
            <title>My wagmi + ConnectKit App</title>
          </NextHead>
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
