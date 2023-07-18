
export interface infoToken {
    price:number,
    nameToken:string,
    symbolToken:string,
    addressToken:string,
    symbolToken2:string,
    addressToken2:string,
    symbolPair:string,
    addressPair:string,
    socLinks:{
        webSite:string,
        twitter:string,
        telegram:string,
    },
}

export interface informationStatisticPair {
    priceChangePercent:number,
    priceChangeUsd:number,
    volume:number,
    graphic:InformationgraphicPair[],
}

export interface InformationgraphicPair {
    time:number,
    value:number,
    volume: number,
}