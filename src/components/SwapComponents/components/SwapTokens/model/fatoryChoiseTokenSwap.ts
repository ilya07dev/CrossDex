import { NetworksI, chainsActive } from "UI/TokenModal/components/MainModal/config/chains";
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

export const fatoryChoiseTokenSwap = () => {
    const $choiseTokenSwap = createStore<tokensBridge | null>(null);
    const $choiseNetworkSwap = createStore<NetworksI>(chainsActive[0]);

    const changeToken = createEvent<tokensBridge | null>();
    const changeNetwork = createEvent<NetworksI>();

    $choiseTokenSwap
        .on(changeToken, (_, token) => token);

    $choiseNetworkSwap
        .on(changeNetwork, (_, network) => network);

    return {
        $choiseTokenSwap,
        changeToken,
        
        $choiseNetworkSwap,
        changeNetwork
    }
}