import { configureChains, createClient} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { polygon, bsc, mainnet } from "@wagmi/chains";

import { RPC_NETWORK } from "./variables";
import { Via } from "@viaprotocol/router-sdk";

export const chainsActive = [mainnet, bsc, polygon];

export const { chains, provider, webSocketProvider } = configureChains(
  [...chainsActive],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: RPC_NETWORK[chain.id],
      }),
      stallTimeout: 1000,
    }),
  ]
);

export const connectorMetamask = new MetaMaskConnector({
  chains,
});


export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    connectorMetamask,
  ],
  provider,
  webSocketProvider,
});

export const DEFAULT_API_KEY = 'e3db93a3-ae1c-41e5-8229-b8c1ecef5583';
export const cli = new Via({apiKey: DEFAULT_API_KEY, url: 'https://router-api.via.exchange', timeout: 30000});
