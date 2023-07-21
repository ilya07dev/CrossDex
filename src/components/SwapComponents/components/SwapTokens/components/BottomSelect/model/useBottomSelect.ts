import axios from "axios";
import { useDropdown } from "hooks";
import { getBridgePriceUrl } from "query/apiUrl/bridge";
import { useAccount, useQuery } from "wagmi";
import { $isChangeSwap } from "../../../model";
import { useStore } from "effector-react";
import { $choiseNetwork2, $choiseTokenSwap2, changeNetwork2, changeNetworkFilter2, changeToken2 } from "./choiseToken2";
import { $choiseNetwork1, $choiseTokenSwap1, changeNetwork1, changeNetworkFilter1, changeToken1 } from "../../Amount/model/choiseToken1";
import { setSearchToken2 } from "./searchToken";
import { setSearchToken1 } from "../../Amount/model/searchToken";
import { isSwap } from "query/useGetTokensBridge";
import { $valueToken1 } from "../../Amount/model/valueToken";


export const useBottomSelect = () => {
    const { close, toggle, dropdownRef, isOpen } = useDropdown();
    const {address} = useAccount()
    
    const isChangeSwap = useStore($isChangeSwap);

    const choiseNetwork = useStore(!isChangeSwap ? $choiseNetwork2 : $choiseNetwork1);
    const choiseToken1 = useStore($choiseTokenSwap1);
    const choiseToken2 = useStore($choiseTokenSwap2);
    const value = useStore($valueToken1);
    const choiseToken = !isChangeSwap ? choiseToken2 : choiseToken1;
    const propsTokens = {
        searchTokens:!isChangeSwap ? setSearchToken2 : setSearchToken1,
        setSelectedNetwork:!isChangeSwap ? changeNetwork2 : changeNetwork1,
        setSelectedToken:!isChangeSwap ? changeToken2 : changeToken1,
        setSelectedNetworkFilter:!isChangeSwap ? changeNetworkFilter2 : changeNetworkFilter1,
        isSwap: "BottomAmount" as isSwap
    }


    const {data:bridgeTokenPrice1 } = useQuery(
        ['priceTokenBridge1', choiseToken1],
        (args:any) => axios.get(getBridgePriceUrl(args.queryKey[1]?.address ?? '0x', args.queryKey[1]?.chainId ?? 1)),
        {
            refetchOnWindowFocus: false,
        }
    );
    const {data:bridgeTokenPrice2 } = useQuery(
        ['priceTokenBridge2', choiseToken2],
        (args:any) => axios.get(getBridgePriceUrl(args.queryKey[1]?.address ?? '0x', args.queryKey[1]?.chainId ?? 1)),
        {
            refetchOnWindowFocus: false,
        }
    );

    const priceUsdToken1 = bridgeTokenPrice1?.data[choiseToken1?.chainId ?? 1]?.[choiseToken1?.address ?? "0x"].USD
    const priceUsdToken2 = bridgeTokenPrice2?.data[choiseToken2?.chainId ?? 1]?.[choiseToken2?.address ?? "0x"].USD

    const priceToken = !isChangeSwap ? +priceUsdToken1/+priceUsdToken2 : priceUsdToken1*priceUsdToken2;

    return {
        close,
        toggle,
        dropdownRef,
        isOpen,
        address,
        choiseNetwork,
        choiseToken,
        propsTokens,
        choiseToken1,
        choiseToken2,
        isChangeSwap,
        priceToken:Number.isNaN(priceToken) ? 0 : priceToken,
        value,
    }
}