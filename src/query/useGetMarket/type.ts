import { idTokens, linksTokens } from "query/useGetTop/type"

export interface tokenMarket {
    "_id": idTokens,
    "pair": {
        "creationBlock": number,
        "creationTime": string,
        "dextScore": {
            "information": number,
            "holders": number,
            "pool": number,
            "transactions": number,
            "creation": number,
            "total": number
        },
        "metrics": {
            "liquidity": number,
            "initialLiquidity": number,
            "reserve": number,
            "reserveRef": number
        },
        "name":string,
        "nameRef": string,
        "symbol": string,
        "symbolRef":string,
        "type": string,
        "locks": string[],
        "votes": {
            "_warning": number,
            "downvotes": number,
            "upvotes": number
        }
    },
    "token": {
        "audit": {
            "is_contract_renounced": boolean,
            "codeVerified": boolean,
            "date":string,
            "lockTransactions": boolean,
            "mint": boolean,
            "provider": string,
            "proxy": boolean,
            "status":string,
            "unlimitedFees": boolean,
            "version": number
        },
        "decimals": number,
        "info": {
            "cmc": string,
            "coingecko": string,
            "description": string,
            "dextools": true,
            "email": string,
            "extraInfo": string,
            "nftCollection": string,
            "ventures": boolean
        },
        "links": linksTokens,
        "logo": string,
        "metrics": {
            "maxSupply":number,
            "totalSupply": number,
            "holders": number,
            "txCount": number,
            "mcap": number | null,
            "fdv": number
        },
        "name":string,
        "symbol": string,
        "totalSupply": string,
        "reprPair": {
            "id": idTokens,
            "updatedAt": string
        }
    },
    "price": number,
    "price24h": number,
    "volume24h": number,
    "swaps24h": number
}

export interface tokenResultMarket {
    name:string,
    symbol:string,
    price:number,
    price24h:number,
    holders:string,
    txCount:string,
    logo:string,
    mcap:number | null,
    volume24h:number,
    swaps24h:number,
    volume24hBtc:string,
    address:string,
}

export interface graphic {
    value:number,
    time:number
}