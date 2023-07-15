
export interface infoToken {
    price:string,
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
    priceChangePercent:string,
    priceChangeUsd:string,
    volume:string,
    priceChangePercentWhole:number,
    graphic:InformationgraphicPair[],
}

export interface InformationgraphicPair {
    time:number,
    value:number,
    volume: number,
}