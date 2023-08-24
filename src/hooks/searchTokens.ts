
import { useEffect, useState } from "react";
import { useDropdown } from "hooks";
import axios from "axios";
import { searchTokensUrl } from "query/apiUrl";
import { convertToCorrectChains } from "utils/convertCorrectChains";
import { searchToken } from "query/useSearchToken";
import { choseToken } from "utils/factoryChoseToken";
//@ts-ignore
import { useDebounce } from "@uidotdev/usehooks";
import { Event } from "effector";
import { useStore } from "effector-react";
import { $choseChain, chainQuery, changeChain } from "config/stateChain";
import { useNavigate } from "react-router-dom";

export enum SearchStatus {
  NOT_SEARCH = "",
  SEARCH = "SEARCH",
  NOT_DATA = "NOT_DATA",
  CHOISE = "CHOISE",
}


export const useSearchTokens = (changeToken:Event<choseToken>) => {
  const dropDown = useDropdown();
  
  const chain = useStore($choseChain);
  const chainCurrent = convertToCorrectChains(chain);

  const [value, setValue] = useState<string>("");
  const [token, setToken] = useState<searchToken | undefined>(undefined);
  const [allTokens, setAllTokens] = useState<searchToken[]>([]);
  const [statusSearch, setStatusSearch] = useState<SearchStatus>(SearchStatus.NOT_SEARCH);
  const valueDebounce = useDebounce(value, 500);
  const navigate = useNavigate();

  
  const onSetToken = (el:searchToken, isNavigate?:boolean) => () => {
    setToken(el);
    setValue('');
    changeToken({
      pairAddress:el.address,
    });
    setStatusSearch(SearchStatus.CHOISE);
    const chainId = +el.chainId
    changeChain(chainId)
    
    if(isNavigate) navigate(`/?pairAddress=${el.address}&network=${chainId}`)

    dropDown.close();
  }

  useEffect(() => {
    if(value !== "") setStatusSearch(SearchStatus.SEARCH);
  }, [value])

  useEffect(() => {
    const searchTokens = async () => {
      const getTokens = await axios(searchTokensUrl(valueDebounce, convertToCorrectChains(chainCurrent)));
      const readyTokens = getTokens.data.pairs.data
        // @ts-ignore
        .filter((pair:searchToken) => Boolean(chainQuery?.[pair.chainId]) );

      if(readyTokens.length > 0) {
        setAllTokens(readyTokens)
      } else {
        setAllTokens([])
        setStatusSearch(SearchStatus.NOT_DATA)
      };

    }

    if(valueDebounce !== "") searchTokens()
  }, [valueDebounce, chainCurrent])

  return {
    inputSearch:{
      value,
      setValue
    },
    choseToken:{
      token,
      setToken
    },
    dropDown,
    onSetToken,
    tokens:allTokens,
    statusSearch
  }
}