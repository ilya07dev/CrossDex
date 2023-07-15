
export interface responseLoosers {
    code: "OK",
    data:looserToken[],
}

export interface looserToken {
    "_id": idTokens,
    "token": {
        "audit": {
            "is_contract_renounced": boolean,
            "codeVerified": boolean,
            "date": string,
            "lockTransactions": boolean,
            "mint": boolean,
            "provider":string,
            "proxy": boolean,
            "status": string,
            "unlimitedFees": boolean,
            "version": number
        },
        "decimals": number,
        "info": {
            "cmc": string,
            "coingecko": string,
            "description": string,
            "dextools": boolean,
            "email": string,
            "extraInfo":string,
            "nftCollection": string,
            "ventures": boolean
        },
        "links": linksTokens,
        "logo": string,
        "metrics": {
            "maxSupply": number,
            "totalSupply": number,
            "holders": number,
            "txCount": number,
            "fdv": number,
        },
        "name": string,
        "symbol": string,
        "totalSupply": string,
        "creationBlock": number,
        "creationTime": string,
        "reprPair": {
            "id": idTokens,
            "updatedAt": string
        }
    },
    "pair": {
        "_id": string,
        "id": idTokens,
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
        "metrics": metricsTokens,
        "name": string,
        "nameRef":string,
        "symbol": string,
        "symbolRef": string,
        "type": string,
        "team": {
            "wallet": string
        },
        "locks": [
            {
                "_id": string,
                "percent": number,
                "unlockDate": string,
                "amount": number,
                "providerId":string,
                "api": string,
                "type": string
            }
        ],
        "votes": {
            "_warning": number,
            "downvotes": number,
            "upvotes": number
        }
    },
    "price": number,
    "priceInterval": number,
    "priceDiff": number,
    "volume": number,
    "swaps": number
}

export interface idTokens {
    "chain": string,
    "exchange": string,
    "pair": string,
    "token": string,
    "tokenRef": string
}

export interface linksTokens {
    "bitbucket": string,
    "discord": string,
    "facebook": string,
    "github": string,
    "instagram": string,
    "linkedin": string,
    "medium": string,
    "reddit": string,
    "telegram": string,
    "tiktok": string,
    "twitter": string,
    "website": string,
    "youtube": string,
}

export interface metricsTokens {
    "liquidity": number,
    "initialLiquidity": number,
    "liquidityUpdatedAt": string,
    "reserve": number,
    "reserveRef": number
}