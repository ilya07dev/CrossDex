import { chainsActiveId } from "UI/TokenModal/components/MainModal/config/chains";
import axios from "axios";
import { $choiseNetworkFilter1 } from "components/SwapComponents/components/SwapTokens/components/Amount/model/choiseToken1";
import { $searchToken1 } from "components/SwapComponents/components/SwapTokens/components/Amount/model/searchToken";
import { $choiseNetworkFilter2 } from "components/SwapComponents/components/SwapTokens/components/BottomSelect/model/choiseToken2";
import { $searchToken2 } from "components/SwapComponents/components/SwapTokens/components/BottomSelect/model/searchToken";
import { $isChangeSwap } from "components/SwapComponents/components/SwapTokens/model";

import { useStore } from "effector-react";
import { utils } from "ethers";
import { getBridgeBalanceUrl, getBridgeTokensUrl } from "query/apiUrl/bridge";
import { useEffect, useRef, useState } from "react";
import { useAccount, useQuery } from "wagmi";

export interface tokensBridge {
    "address": string,
    "chainId": number,
    "decimals": number,
    "name": string,
    "symbol": string,
    "logoURI": string,
    "balance": string,
}

export type isSwap = "Amount" | "BottomAmount"

export const useGetTokensBridge = (
  isSwap:isSwap
) => {
  const {address} = useAccount()
  
  const {data:tokensBridge } = useQuery(
    ["tokensErc20Bridge"],
    () => axios.get(getBridgeTokensUrl()),
    {
      refetchOnWindowFocus: false,
    }
  );

  const {data:tokensBalancesBridge } = useQuery(
    ["tokensErc20BalanceBridge", address],
    (args) => axios.get(getBridgeBalanceUrl(args.queryKey[1] ?? '')),
      {
        refetchOnWindowFocus: false,
      }
  );
  const [page, setPage] = useState(0);
  const lastToken = useRef(null);

  useEffect(() => {
    if(lastToken && lastToken?.current) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) setPage((page) => page+1)
        })
      });
      observer.observe(lastToken?.current);

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    } 
  }, [lastToken])

  const isChangeSwap = useStore($isChangeSwap);

    const chainSelect = useStore(isSwap === "Amount" && !isChangeSwap ? $choiseNetworkFilter1 : $choiseNetworkFilter2);
    const search = useStore(isSwap === "Amount" && !isChangeSwap ? $searchToken1 : $searchToken2);

    let tokens = tokensBridge?.data;
    if(!tokens) return null;


    if(search !== "") {
      tokens = tokens
        .filter((token:tokensBridge) => {
          const searchLower = search.toLowerCase();
          return ( token.name.toLowerCase().includes(searchLower) || 
            token.symbol.toLowerCase().includes(searchLower) ) || 
            token.address.toLowerCase().includes(searchLower) && searchLower.slice(0,2) === '0x';
        })
    }
    
    tokens = tokens
      .filter((token:tokensBridge) => 
        token.chainId === chainSelect?.chain || 
        !chainSelect?.chain && chainsActiveId[token.chainId]
      )
      .slice(0, page*10+10)
      .map((token:tokensBridge) => {
        const tokenBalance = tokensBalancesBridge?.data.balances[token.chainId]
          .find((tokenBalance:{address:string}) => token.address === tokenBalance.address);
        return ({
          ...token,
          balance:utils.formatUnits(tokenBalance?.balance ?? 0, tokenBalance?.decimals ?? 0)
        })
      })
    

    

    return {
      tokens,
      lastToken
    };
}