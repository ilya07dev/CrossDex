import axios from "axios";
import { useNetwork } from 'wagmi'
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
import { convertToCorrectChains } from "utils/convertCorrectChains";
import { $choseTokenSwap } from "pages/SwapPage/model/stateChoseToken";


export const useGetInfoToken = () => {
    const [query] = useSearchParams();
    const choseToken = useStore($choseTokenSwap);
    const timeCurent = useStore($timeCuurent)
    const network = query.get("network");
    const {chain} = useNetwork();
    const chainCurrent = convertToCorrectChains(chain?.id ?? Number(network));

    const {data:tokenGraphic } = useQuery(
        ["infoTokenGraphic", choseToken, timeCurent],
        (args:any) => axios.get(tradingTokensUrl(args.queryKey[1].pairAddress, chainCurrent, args.queryKey[2])),
        {
            refetchOnWindowFocus: false,
        }
    );
    

    const {data:token } = useQuery(
        ["infoTokenSwap", choseToken],
        (choseToken:any) => axios.get(infoTokenUrl(choseToken.queryKey[1].pairAddress, chainCurrent)),
        {
            refetchOnWindowFocus: false,
        }
    ); 

    const tokenResponse:tokenInfo = token?.data?.pairs?.data;
    
    if(!token?.data) return null;
    const graphic:InformationgraphicPair[] = tokenGraphic?.data;
    if(!graphic) return null;

    const price = tokenResponse.priceUsd;
    const priceGraphic = graphic[graphic.length-1].value;
    const priceChangePercent = (price-priceGraphic) / priceGraphic * 100;
    
    const statisticInfo:informationStatisticPair = {
        volume:convertNumbers(graphic.reduce((acc, info) => acc+info.volume, 0)),
        priceChangePercent,
        priceChangeUsd:price - priceGraphic,

        graphic,
    }

    const tokenInfo:infoToken = {
        price:convertNumbers(tokenResponse.priceUsd),
        nameToken:tokenResponse.token0Name,
        symbolToken:tokenResponse.token0Symbol,
        addressToken:tokenResponse.token0,
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