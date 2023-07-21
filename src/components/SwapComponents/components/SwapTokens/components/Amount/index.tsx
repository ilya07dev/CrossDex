

import { BlackBlur, TokenModal } from "UI";

import { ModalArr, SwapIcon } from "components/Icons";

import { useDropdown } from "hooks";

import { images } from "assets/img";

import cn from "classnames";
import { useAccount } from "wagmi";
import { 
  $choiseNetwork1, 
  $choiseTokenSwap1, 
  changeNetwork1, 
  changeNetworkFilter1, 
  changeToken1
} from "./model/choiseToken1";
import { 
  $choiseNetwork2, 
  $choiseTokenSwap2, 
  changeNetwork2, 
  changeNetworkFilter2,
  changeToken2
} from "../BottomSelect/model/choiseToken2";

import { useStore } from "effector-react";
import { chainsActive } from "UI/TokenModal/components/MainModal/config/chains";
import { $isChangeSwap, changeSwap } from "../../model";
import { setSearchToken1 } from "./model/searchToken";
import { isSwap } from "query/useGetTokensBridge";
import { convertNumbers } from "utils";
import { setValueToken1 } from "./model/valueToken";

interface IProps {
  className?: string;
}

export function Amount({ className }: IProps) {
  
  const {address} = useAccount();
  const { close, toggle, dropdownRef, isOpen } = useDropdown();

  const isChangeSwap = useStore($isChangeSwap);
  
  const choiseNetwork = useStore(isChangeSwap ? $choiseNetwork2 : $choiseNetwork1);
  const choiseToken = useStore(isChangeSwap ? $choiseTokenSwap2 : $choiseTokenSwap1);
  const propsTokens = {
    searchTokens:isChangeSwap ? setSearchToken1 : setSearchToken1,
    setSelectedNetwork:isChangeSwap ? changeNetwork2 : changeNetwork1,
    setSelectedToken:isChangeSwap ? changeToken2 : changeToken1,
    setSelectedNetworkFilter:isChangeSwap ? changeNetworkFilter2 : changeNetworkFilter1,
    isSwap:"Amount" as isSwap
  };


  return (
    <article
      className={cn(
        "w-full flex items-center justify-between relative",
        "bg-c-secondary rounded-[20px] px-3.5 2xl:px-7 3xl:px-[55px]  3xl:py-[47.5px]",
        address ? "py-[16px]" : "py-6",
        className
      )}
    >
      {choiseToken ? (
          <>
            <div
              className={cn(
                "cursor-pointer group hover:bg-c-primary duration-500",
                "w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] flex items-center justify-center",
                "absolute left-1/2 -translate-x-1/2 bg-[#FFF379] rounded-[10px] sm:rounded-[20px]",
                address
                  ? "-bottom-[20px] sm:-bottom-[30px] 3xl:-bottom-[40px]"
                  : "-bottom-[30px] sm:-bottom-[38px] 3xl:-bottom-[40px]"
              )}
              onClick={() => changeSwap()}
            >
              <SwapIcon className="text-black group-hover:text-[#FFF379] duration-500" />
            </div>
            
            <input
              placeholder="Enter amount"
              className={cn(
                "w-1/2 bg-transparent",
                "text-base sm:text-[25px] 3xl:text-[30px] text-white placeholder:text-[#9B9898] font-medium leading-[100%]"
              )}
              type="text"
              onChange={(event) => setValueToken1(event.target.value)}
            />

            <BlackBlur open={isOpen} />
            <div ref={dropdownRef}>
              <button
                onClick={toggle}
                className={cn(
                  "flex items-center gap-1.5 sm:gap-[10px] py-[10px] px-2 sm:pr-5",
                  "text-base sm:text-xl 3xl:text-[25px] font-bold text-white",
                  "border-2 border-[#45464A] border-dashed rounded-r-secondary"
                )}
              >
                <div className="w-8 h-8 3xl:w-10 3xl:h-10 relative rounded-full">
                  <img
                    className="w-5 h-5 absolute -top-[5px] -right-[5px] z-[1]"
                    src={choiseNetwork?.icon ?? chainsActive[0].icon}
                    alt="img"
                  />
                      
                  <img
                    className="absolute top-0 left-0 w-full h-full"
                    src={choiseToken?.logoURI ?? images.usdc}
                    alt=""
                  />
                </div>

                {choiseToken?.symbol}
                <ModalArr />
              </button>
              {address && (
                <span
                  className={cn(
                    "mt-[7.8px] flex items-center justify-center gap-[3px]",
                    "text-[#9B9898] text-xl font-medium leading-[100%]"
                  )}
                >
                  Balance: <span className="text-white">{convertNumbers(choiseToken?.balance ?? "0")}</span>
                </span>
              )}
              
              <TokenModal
                searchTokens={propsTokens.searchTokens}
                setSelectedNetwork={propsTokens.setSelectedNetwork}
                setSelectedToken={propsTokens.setSelectedToken}
                setSelectedNetworkFilter={propsTokens.setSelectedNetworkFilter}
                isSwap={propsTokens.isSwap}
                isOpen={isOpen}
                close={close}
                className=""
              />
            </div>
          </>
        )
        : (
          <div ref={dropdownRef}>
            <button
              onClick={toggle}
              className={cn(
                "flex items-center gap-[10px] py-[10px] px-[21.5px]",
                "text-base sm:text-xl 3xl:text-[25px] font-bold text-white",
                "border-2 border-[#45464A] border-dashed rounded-r-secondary"
              )}
            >
              Select token
              <ModalArr />
            </button>
            <TokenModal
              searchTokens={propsTokens.searchTokens}
              setSelectedNetwork={propsTokens.setSelectedNetwork} 
              setSelectedNetworkFilter={propsTokens.setSelectedNetworkFilter}
              setSelectedToken={propsTokens.setSelectedToken}
              isSwap={propsTokens.isSwap}
              isOpen={isOpen}
              close={close}
              className=""
            />
          </div>
        )
      }
    </article>
  );
}
