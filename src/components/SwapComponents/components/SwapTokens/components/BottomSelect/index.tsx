
import { BlackBlur, TokenModal } from "UI";

import { ModalArr } from "components/Icons";
import { images } from "assets/img";

import cn from "classnames";
import { 
  changeNetwork2, 
  changeNetworkFilter2,
  changeToken2
} from "./model/choiseToken2";
import { convertNumbers } from "utils";
import { useBottomSelect } from "./model/useBottomSelect";
import { chainsActive } from "UI/TokenModal/components/MainModal/config/chains";

interface IProps {
  className?: string;
}

export function BottomSelect({
  className,
  
}: IProps) {

  const {
    close,
    toggle,
    dropdownRef,
    isOpen,
    address,
    choiseNetwork,
    choiseToken,
    propsTokens,
    isChangeSwap,
    choiseToken1,
    choiseToken2,
    value,
    priceToken
  } = useBottomSelect()
  
  return (
    <>
      <BlackBlur open={isOpen} />
      <article
        ref={dropdownRef}
        className={cn(
          "w-full flex",
          "bg-c-secondary rounded-[20px] ",
          address
            ? "flex-col justify-between pl-[21px] pr-[24px] py-[15.9px] 3xl:py-[25px]"
            : "items-center justify-center py-[40px] 3xl:py-[60px]",
          className
        )}
      >
        {choiseToken ? (
          <>
            <div className="w-full flex justify-between items-start">
              <div
                className="w-1/2 bg-transparent text-[30px] text-[#9B9898] font-medium"
              >
                {convertNumbers(priceToken*+value)}
              </div>
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
                <TokenModal
                  searchTokens={propsTokens.searchTokens}
                  setSelectedNetwork={changeNetwork2} 
                  setSelectedNetworkFilter={changeNetworkFilter2}
                  setSelectedToken={changeToken2}
                  isSwap={propsTokens.isSwap}
                  isOpen={isOpen}
                  close={close}
                  className=""
                />
              </div>
            </div>
            {choiseToken1 && choiseToken2 &&
              <div
                className={cn(
                  "w-fit flex items-center gap-[5px] py-[6px] 3xl:py-[9px] px-[11.5px] mt-2 sm:mt-0",
                  "text-base 3xl:text-xl font-medium text-white leading-[100%]",
                  "bg-c-primary rounded-[15px]"
                )}
              >
                <img 
                  src={isChangeSwap ? choiseToken2.logoURI : choiseToken1.logoURI}
                  className="w-5 h-5" 
                  alt="" 
                />
                <span>1{" "}</span>
                <span className="text-[#9B9898]">=</span>
                <img 
                  src={isChangeSwap ? choiseToken1.logoURI : choiseToken2.logoURI}
                  className="w-5 h-5" 
                  alt="" 
                />
                <span>{convertNumbers(priceToken)}</span>
              </div>
            }
          </>
        ) : (
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
        )}
      </article>
    </>
  );
}
