import { chainsActive } from "config/blockchain"


export const convertToCorrectChains = (chainId:number | undefined) => {
    if(chainsActive.find((chain) => chain.id === chainId) || typeof(chainId) === "undefined") return Number(chainId);
    return 1;
}