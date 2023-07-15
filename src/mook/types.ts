export interface IToken {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
  extensions?: {
    bridgeInfo?: {
      10?: {
        tokenAddress: string;
      };
      56?: {
        tokenAddress: string;
      };
      137?: {
        tokenAddress: string;
      };
      42161?: {
        tokenAddress: string;
      };
      43114?: {
        tokenAddress: string;
      };
    };
  };
}
