
import { useEffect, useState } from "react";
import { useDropdown } from "hooks";
import axios from "axios";
import { useNetwork } from "wagmi";
import { searchTokensUrl } from "query/apiUrl";
import { convertToCorrectChains } from "utils/convertCorrectChains";
import { searchToken } from "query/useSearchToken";
import { choseToken } from "utils/factoryChoseToken";
//@ts-ignore
import { useDebounce } from "@uidotdev/usehooks";
import { Event } from "effector";


export const useSearchTokens = (changeToken:Event<choseToken>) => {
  const dropDown = useDropdown();
  const {chain} = useNetwork();

  const [value, setValue] = useState<string>("");
  const [token, setToken] = useState<searchToken | undefined>(undefined);
  const [allTokens, setAllTokens] = useState<searchToken[]>([]);
  const valueDebounce = useDebounce(value, 500);

  
  const onSetToken = (el:searchToken) => () => {
    setToken(el);
    setValue('');
    changeToken({
      pairAddress:el.address,
      tokenAddress:el.address,
    })
    dropDown.close();
  }

  useEffect(() => {
    const searchTokens = async () => {
      const getTokens = await axios(searchTokensUrl(valueDebounce, convertToCorrectChains(chain?.id)));
      setAllTokens(getTokens.data.pairs.data)
    }

    if(valueDebounce !== "") searchTokens()
  }, [valueDebounce, chain])

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