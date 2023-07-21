import { NetworksI } from "UI/TokenModal/components/MainModal/config/chains";
import { createEvent, createStore } from "effector"
import { tokensBridge } from "query/useGetTokensBridge";

export interface choiseTokenI {
    name:string,
    symbol:string,
    address:string,
    chainId:number,
    logoURI:string,
    balance:number,
    priceUsd:number,
    decimals:number,
}

export type networkSwapType = NetworksI | null;
export type tokenSwapType = tokensBridge | null;

export const fatoryChoiseTokenSwap = () => {
    const $choiseTokenSwap = createStore<tokenSwapType>(null);
    const $choiseNetworkSwap = createStore<networkSwapType>(null);
    const $choiseNetworkFilter = createStore<networkSwapType>(null);

    const changeToken = createEvent<tokenSwapType>();
    const changeNetwork = createEvent<networkSwapType>();
    const changeNetworkFilter = createEvent<networkSwapType>();

    $choiseTokenSwap
        .on(changeToken, (_, token) => token);

    $choiseNetworkSwap
        .on(changeNetwork, (_, network) => network);

    $choiseNetworkFilter
        .on(changeNetworkFilter, (_, network) => network);

    return {
        $choiseTokenSwap,
        changeToken,
        
        $choiseNetworkSwap,
        changeNetwork,

        $choiseNetworkFilter,
        changeNetworkFilter
    }
}