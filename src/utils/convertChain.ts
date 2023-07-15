

export const convertChain = (chainId:number) => {
    switch(chainId) {
        case 1:
            return 'ether';
        case 56:
            return 'bnb';
        case 137:
            return 'polygon';
    }
}