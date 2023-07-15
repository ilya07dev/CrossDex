

import { createRoot } from "react-dom/client";

import { WagmiConfig } from "wagmi";

import { QueryClient, QueryClientProvider } from "react-query";

import { AppRoutes } from "./App";

import "./styles/global.css";
import { wagmiClient } from "config/blockchain";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <WagmiConfig client={wagmiClient} >
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </WagmiConfig>
);
