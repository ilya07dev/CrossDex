import { createEvent, createStore } from "effector"

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
    const $choiseTokenSwap = createStore<choiseTokenI | null>(null);

    const changeToken = createEvent<choiseTokenI | null>();

    $choiseTokenSwap
        .on(changeToken, (_, token) => token);

    return {
        $choiseTokenSwap,
        changeToken,
    }
}