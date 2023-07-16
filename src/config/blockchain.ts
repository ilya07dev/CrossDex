import { configureChains, createClient} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { polygon, bsc, mainnet } from "@wagmi/chains";

import { RPC_NETWORK } from "./variables";

export const chainsActive = [polygon, bsc, mainnet];

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
