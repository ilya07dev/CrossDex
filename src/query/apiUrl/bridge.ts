

import {SERVER} from './base';

export const getBridgeTokensUrl = () => `${SERVER}bridge/tokens`
export const getBridgePriceUrl = (addressToken:string, chainId:number) => `${SERVER}bridge/price/${addressToken}/${chainId}`
export const getBridgeBalanceUrl = (address:string) => `${SERVER}bridge/balance/${address}`
export const getBridgeBalanceChainUrl = (address:string) => `${SERVER}bridge/balancesChain/${address}`

