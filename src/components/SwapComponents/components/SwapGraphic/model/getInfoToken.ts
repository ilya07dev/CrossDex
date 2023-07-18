import axios from "axios";
import { infoTokenUrl } from "query/apiUrl";
import { useQuery } from "react-query";
import {infoToken } from "../config";
import { tokenInfo } from "query/useGetTokenInfo";
import { convertNumbers } from "utils";
import { tradingTokensUrl } from "query/apiUrl";
import { informationStatisticPair, InformationgraphicPair } from "../config";
import { useStore } from "effector-react";
import { $timeCuurent } from "pages/SwapPage/model";
import { convertToCorrectChains } from "utils/convertCorrectChains";
import { $choseTokenSwap } from "pages/SwapPage/model/stateChoseToken";
import { $choseChain } from "config/stateChain";
import { TIME_VARIANTS } from "pages/SwapPage/config";


export const useGetInfoToken = () => {
    const choseToken = useStore($choseTokenSwap);
    const timeCurent = useStore($timeCuurent);

    const chain = useStore($choseChain);
    const chainCurrent = convertToCorrectChains(chain);

    const {data:tokenGraphic } = useQuery(
        ["infoTokenGraphic", choseToken, timeCurent, chainCurrent],
        (args:any) => axios.get(tradingTokensUrl(args.queryKey[1].pairAddress, args.queryKey[3], args.queryKey[2])),
        {
            refetchOnWindowFocus: false,
        }
    );
    

    const {data:token } = useQuery(
        ["infoTokenSwap", choseToken, chainCurrent],
        (args:any) => axios.get(infoTokenUrl(args.queryKey[1].pairAddress, args.queryKey[2])),
        {
            refetchOnWindowFocus: false,
        }
    ); 

    const tokenResponse:tokenInfo = token?.data?.pairs?.data;
    
    if(!token?.data) return null;
    const fromHistory = Date.now() / 1000;
    const timeStamp:Record<TIME_VARIANTS, number> = {
        H24:86400,
        H12:43_200,
        H6:21_600,
        H1:3_600,
    };
    const graphic:InformationgraphicPair[] = tokenGraphic?.data?.filter((history:InformationgraphicPair) => fromHistory-timeStamp[timeCurent] < history.time);
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