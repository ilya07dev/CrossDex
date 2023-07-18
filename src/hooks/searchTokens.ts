
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
import { $choseChain } from "config/stateChain";
import { useNavigate } from "react-router-dom";


export const useSearchTokens = (changeToken:Event<choseToken>) => {
  const dropDown = useDropdown();
  
  const chain = useStore($choseChain);
  const chainCurrent = convertToCorrectChains(chain);

  const [value, setValue] = useState<string>("");
  const [token, setToken] = useState<searchToken | undefined>(undefined);
  const [allTokens, setAllTokens] = useState<searchToken[]>([]);
  const valueDebounce = useDebounce(value, 500);
  const navigate = useNavigate();

  
  const onSetToken = (el:searchToken, isNavigate?:boolean) => () => {
    setToken(el);
    setValue('');
    changeToken({
      pairAddress:el.address,
    });
    
    if(isNavigate) navigate(`/?pairAddress=${el.address}&network=${+el.chainId}`)

    dropDown.close();
  }

  useEffect(() => {
    const searchTokens = async () => {
      const getTokens = await axios(searchTokensUrl(valueDebounce, convertToCorrectChains(chainCurrent)));

      setAllTokens(getTokens.data.pairs.data.filter((pair:searchToken) => +pair.chainId === chain ))
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
    tokens:allTokens
  }
}