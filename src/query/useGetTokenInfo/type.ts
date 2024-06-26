export interface baseTokenData {
    address: string, 
    decimals: number, 
    symbol: string, 
    name: string, 
    _id: string
}

export interface tokenInfo {
    address:string,
    ath:number,
    athPrice:number,
    athPriceUsd:number,
    basePrice:number,
    baseToken:string,
    baseTokenData: baseTokenData,
    baseTokenInfo: null | {
        "_id": string,
        "address": string,
        "chainId": string,
        "createdAt": 1689346931465,
        "description":string,
        "logo": string,
        "owner": string,
        "status": 1,
        "telegram": string,
        "twitter": string,
        "validators": {},
        "website": string,
    },
    baseTokenLogo:string,
    baseTokenPairs: {
        address:string,
        baseTokenData: baseTokenData,
        chainId:string,
        factory:string,
        labels:string[],
        liquidity:number
        priceUsd:number,
        quoteReserve:string,
        quoteTokenData:baseTokenData
        reserve0:string,
        reserve1:string,
        totalTransaction24h:number,
        _id:string
    }[],
    blockNumber:number,
    chainId:string,
    decimal0:number,
    decimal1:number,
    factory:string,
    fdv:number,
    labels:string[]
    liquidity:number,
    newInformation: {
        _id: string, 
        priceChange24h: number, 
        totalTransaction24h: number, 
        volume24h: number
    },
    pairCreatedTime:number,
    priceUsd:number,
    quoteToken:string,
    quoteTokenData:baseTokenData,
    reserve0:string,
    reserve1:string,
    score:{},
    status:number,
    token0:string,
    token0Name:string,
    token0Symbol:string,
    token1:string,
    token1Name:string,
    token1Symbol:string,
    tradingStartAt:number,
    tradingStartTime:number,
    _id:string,
}