import { IToken } from "mook/types";
import axios from "axios";
import { useQuery } from "react-query";

const tokensQuery = (): [string, () => Promise<any>] => {
  return [
    "get-tokens-data",
    async () => {
      const { data } = await axios.get(
        "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
      );
      return data;
    },
  ];
};

interface useTokensDataReturn {
  tokens: IToken[] | undefined;
  isLoading: boolean;
  error: any;
}

export const useGetTokens = (): useTokensDataReturn => {
  const [queryKey, queryData] = tokensQuery();

  const { data, error, isLoading } = useQuery(queryKey, queryData, {
    select: (response) => ({
      tokens: response?.tokens?.slice(0, 30),
    }),
  });

  return {
    tokens: data?.tokens,
    error,
    isLoading,
  };
};
