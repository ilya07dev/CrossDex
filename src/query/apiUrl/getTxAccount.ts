import { ЕTHER_SCAN, BNB_SCAN, POLYGON_SCAN } from "./base";

export const txUserUrl = (address:string, chainId:number) => {
    switch(chainId) {
        case 1:
            return `${ЕTHER_SCAN}${address}`;
        case 56:
            return `${BNB_SCAN}${address}`;
    }

    return `${POLYGON_SCAN}${address}`;
};