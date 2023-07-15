import axios from "axios";
import { mainnet, useNetwork } from 'wagmi'
import { infoTokenUrl } from "query/apiUrl";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import {infoToken } from "../config";
import { tokenInfo } from "query/useGetTokenInfo";
import { convertNumbers } from "utils";
import { tradingTokensUrl } from "query/apiUrl";
import { informationStatisticPair, InformationgraphicPair } from "../config";
import { useStore } from "effector-react";
import { $timeCuurent } from "pages/SwapPage/model";


export const useGetInfoToken = () => {
    const [query] = useSearchParams();
    const timeCuurent = useStore($timeCuurent)
    const pairAddress = query.get("pairAddress")
    const {chain} = useNetwork()
    const chainCurrent = chain?.id ?? mainnet.id;
    if(!pairAddress) return null;

    const {data:tokenGraphic } = useQuery(
        "infoTokenGraphic",
        () => axios.get(tradingTokensUrl(pairAddress, chainCurrent, timeCuurent)),
        {
            refetchOnWindowFocus: false,
        }
    );

    if(!pairAddress) return null;

    const {data:token } = useQuery(
        "infoTokenSwap",
        () => axios.get(infoTokenUrl(pairAddress, chainCurrent)),
        {
            refetchOnWindowFocus: false,
        }
    );

    const tokenResponse:tokenInfo = token?.data.pairs.data;

    
    if(!token?.data) return null;
    const graphic:InformationgraphicPair[] = tokenGraphic?.data;
    if(!graphic) return null;

    const price = tokenResponse.priceUsd;
    const pricegaphic = graphic[graphic.length-1].value;
    const priceChangePercentWhole = (price-pricegaphic) / pricegaphic;
    const statisticInfo:informationStatisticPair = {
        volume:convertNumbers(graphic.reduce((acc, info) => acc+info.volume, 0)),
        priceChangePercent:convertNumbers(priceChangePercentWhole),
        priceChangePercentWhole,
        priceChangeUsd:convertNumbers(price - pricegaphic),

        graphic,
    }
    

    const tokenInfo:infoToken = {
        price:convertNumbers(tokenResponse.priceUsd),
        nameToken:tokenResponse.baseTokenData.name,
        symbolToken:tokenResponse.baseTokenData.symbol,
        addressToken:tokenResponse.baseTokenData.address,
        symbolToken2:tokenResponse.token1Symbol,
        addressToken2:tokenResponse.token1,
        symbolPair:tokenResponse.baseTokenPairs[0].baseTokenData.symbol,
        addressPair:tokenResponse.baseTokenPairs[0].baseTokenData.address,
        socLinks:{
            webSite:tokenResponse?.baseTokenInfo?.website ?? '#',
            twitter:tokenResponse?.baseTokenInfo?.twitter ?? "https://twitter.com/home",
            telegram:tokenResponse?.baseTokenInfo?.telegram ?? '',
        }
    }

    return {
        statisticInfo,
        tokenInfo
    };
}