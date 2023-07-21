

import cn from "classnames";
import { isSwap, tokensBridge, useGetTokensBridge } from "query/useGetTokensBridge";

import {Event} from 'effector';
import { chainsActiveId } from "../../config/chains";
import { networkSwapType, tokenSwapType } from "components/SwapComponents/components/SwapTokens/model";
import { convertNumbers } from "utils";

interface IProps {
  className?: string;
  close: () => void;
  setSelectedToken:Event<tokenSwapType>,
  setSelectedNetwork:Event<networkSwapType>,
  isSwap:isSwap,
}

export function SelectListTokens({ 
  className, 
  close, 
  setSelectedToken, 
  setSelectedNetwork,
  isSwap
}: IProps) {
  const data = useGetTokensBridge(isSwap);

  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:gap-[26px] h-[330px] 3xl:max-h-[410px] pr-4",
        "bg-c-secondary rounded-r-secondary px-[18px] pt-[18px] pb-4",
        "overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-[#37383D] custom_scroll border-y-[18px] border-r-[18px] border-transparent",
        className
      )}
    >
      {data?.tokens
      .map((token: tokensBridge) => (
        <div
          className="flex items-center justify-between cursor-pointer"
          key={token.address+token.chainId}
        >
          <div
            onClick={() => {
              setSelectedToken(token);
              setSelectedNetwork(chainsActiveId[token.chainId])
              close();
            }}
            className={cn(
              "flex items-center gap-[9px]",
              "text-white text-base sm:text-xl font-medium"
            )}
          >
            <img
              src={token.logoURI}
              alt="img"
              className={cn(
                "rounded-full",
                "min-w-[24px] sm:min-w-[40px] max-w-[24px] sm:max-w-[40px]",
                "min-h-[24px] sm:min-h-[40px] max-h-[24px] sm:max-h-[40px]"
              )}
            />
            <div className="flex flex-col gap-[1px] leading-[120%]">
              {token.name}
              <div className="flex items-center gap-[5px] leading-[100%]">
                <img
                  src={chainsActiveId[token.chainId]?.icon }
                  alt="img"
                  className={cn(
                    "min-w-[14px] sm:min-w-[20px] max-w-[14px] sm:max-w-[20px]",
                    "min-h-[14px] sm:min-h-[20px] max-h-[14px] sm:max-h-[20px]"
                  )}
                />

                on {chainsActiveId[token.chainId].name.toLowerCase()}
              </div>
            </div>
          </div>
          <p
            className={cn(
              "w-1/3 sm:w-auto px-[10px] bg-transparent",
              "text-right text-white text-xl font-medium placeholder:text-white"
            )}
          >
            {convertNumbers(token.balance)}
          </p>
        </div>
      ))}
      <div 
        className="min-h-[1px]"
        ref={data?.lastToken}
      />
    </div>
  );
}
