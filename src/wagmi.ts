import { createClient, configureChains, mainnet } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { sepolia } from 'wagmi/chains'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const alchemyAPI = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, sepolia],
  [alchemyProvider({ apiKey: alchemyAPI }), publicProvider()],
)

// Set up client
export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
  ],
  provider,
  webSocketProvider,
})


