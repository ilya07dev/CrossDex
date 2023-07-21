import { CloseIcon } from "components/Icons";
import { SelectListTokens } from "./components/SelectList";

import { networksMook } from "mook";

import { TypeModal } from "../../types";

import cn from "classnames";
import { NetworksI, chainsActive } from "./config/chains";

import {Event} from 'effector';

import { networkSwapType, tokenSwapType } from "components/SwapComponents/components/SwapTokens/model";
import { isSwap } from "query/useGetTokensBridge";

interface IProps {
  className?: string;
  isOpen?: boolean;
  close?: () => void;
  setActive: (el: TypeModal) => void;
  setSelectedNetwork:Event<networkSwapType>,
  setSelectedToken:Event<tokenSwapType>,
  setSelectedNetworkFilter:Event<networkSwapType>,
  searchTokens:Event<string>,
  isSwap:isSwap
}

export function MainModal({
  isOpen,
  close,
  setActive,
  setSelectedNetwork,
  setSelectedNetworkFilter,
  setSelectedToken,
  isSwap,
  searchTokens,
}: IProps) {
  return (
    <article
      className={cn(
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500",
        "w-[calc(100vw-20px)] lg:w-[770px] bg-c-primary rounded-r-primary z-[2222222]",
        "pt-5 pb-5 sm:pb-7 3xl:pt-[38px] 3xl:pb-[45px] px-3 sm:px-[45px]",
        isOpen ? "scale-y-[1] opacity-[1]" : "scale-y-0 opacity-0"
      )}
    >
      <div
        className={cn(
          "flex justify-between items-center",
          "text-[30px] text-white font-bold"
        )}
      >
        Select token
        <CloseIcon
          onClick={close}
          className="text-[#9B9898] hover:text-white duration-500 cursor-pointer"
        />
      </div>

      <input
        onChange={(e) => searchTokens(e.target.value)}
        placeholder="Search"
        type="text"
        className={cn(
          "w-full rounded-r-secondary bg-c-secondary",
          "mt-5 3xl:mt-[50px] px-[18px] py-3 sm:p-[18px]",
          "text-base sm:text-lg font-medium text-white placeholder:text-[#9B9898]"
        )}
      />

      <h4
        className={cn(
          "text-[#9B9898] text-xl font-medium",
          "mt-5 3xl:mt-[35px] leading-[100%]"
        )}
      >
        Select a network
      </h4>
      <div className="flex items-center justify-between gap-1 sm:gap-[10px] mt-[10px]">
        <span
          className={cn(
            "flex items-center justify-center h-11 sm:h-[60px]",
            "px-[10px] sm:px-[18.5px] rounded-[10px] sm:rounded-[20px] bg-c-secondary",
            "text-[#9B9898] text-base sm:text-xl font-medium cursor-pointer"
          )}
          onClick={() => setSelectedNetworkFilter(null)}
        >
          All
        </span>
        {chainsActive.map((el: NetworksI) => {
          return (
            <div
              key={el.symbol}
              className={cn(
                "flex items-center justify-center cursor-pointer",
                "p-[10px] rounded-[10px] sm:rounded-[20px] bg-c-secondary"
              )}
              onClick={() => setSelectedNetworkFilter(el)}
            >
              <img
                src={el.icon}
                alt="img"
                className={cn(
                  "rounded-full",
                  "min-w-[24px] sm:min-w-[40px] max-w-[24px] sm:max-w-[40px]",
                  "min-h-[24px] sm:min-h-[40px] max-h-[24px] sm:max-h-[40px]"
                )} />
            </div>
          );
        })}
        <span
          onClick={() => {
            setActive("more");
          }}
          className={cn(
            "flex items-center justify-center h-[44px] sm:h-[60px] cursor-pointer",
            "rounded-[10px] sm:rounded-[20px] bg-c-secondary px-[10px] sm:px-[17px]",
            "text-[#9B9898] hover:text-white text-sm sm:text-xl font-medium duration-500"
          )}
        >
          {networksMook.length} More
        </span>
      </div>
      <h4
        className={cn(
          "text-[#9B9898] text-base sm:text-xl font-medium",
          "mt-5 3xl:mt-[35px] leading-[100%]"
        )}
      >
        Select token
      </h4>
      <SelectListTokens
        isSwap={isSwap}
        setSelectedToken={setSelectedToken}
        setSelectedNetwork={setSelectedNetwork}
        close={close!}
        className="mt-[10px]"
      />
    </article>
  );
}
