

export const convertChain = (chainId:number, isAmazon?:boolean) => {
    switch(chainId) {
        case 1:
            return `ether${isAmazon ? 'eum' : ''}`;
        case 56:
            return 'bnb';
        case 137:
            return 'polygon';
    }
}

export const convertChainMarket = (chainId:number) => {
    switch(chainId) {
        case 1:
            return `ether`;
        case 56:
            return 'bsc';
        case 137:
            return 'polygon';
    }
}