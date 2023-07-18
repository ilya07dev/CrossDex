import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { ApprovalsPage, ConnectPage, MarketPage, SwapPage } from "./pages";

import "react-toastify/dist/ReactToastify.css";
import {
  ApprovalsIcon,
  MarketIcon,
  MetamaskMobileIcon,
  SwapIcon,
} from "./components/Icons";
import { NetworkModal } from "UI/NetworkModal";

export type RoutesType = "Swap" | "Approvals" | "Market" | "ConnectWallet";

export interface IRoute {
  title: string;
  path: string;
  icon?: any;
  link: (...args: any[]) => string;
  children?: Record<string, IRoute>;
  disabled?: boolean;
}

export const routes: Record<RoutesType, IRoute> = {
  Swap: {
    title: "Swap",
    path: "/",
    link: () => "/",
    icon: SwapIcon,
  },
  Approvals: {
    title: "Approvals",
    path: "/approvals",
    link: () => "/approvals",
    icon: ApprovalsIcon,
  },
  Market: {
    title: "Market",
    path: "/market",
    link: () => "/market",
    icon: MarketIcon,
  },
  ConnectWallet: {
    title: "ConnectWallet",
    path: "/connect",
    link: () => "/connect",
    icon: MetamaskMobileIcon,
  },
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NetworkModal />
      <Routes>
        <Route path={routes.Swap.path} element={<SwapPage />} />
        <Route path={routes.Approvals.path} element={<ApprovalsPage />} />
        <Route path={routes.Market.path} element={<MarketPage />} />
        <Route path={routes.ConnectWallet.path} element={<ConnectPage />} />
      </Routes>
    </BrowserRouter>
  );
};
