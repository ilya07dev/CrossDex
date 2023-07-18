import { useState } from "react";

import { CloseIcon, SetIcon } from "components/Icons";

import { useDropdown } from "hooks";

import { TypeGasPrice, TypeSlippage } from "./types";

import { BlackBlur } from "UI";

import cn from "classnames";

function Arr() {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path
        d="M1.7677 1L9.12119 8.35349C9.90224 9.13454 9.90223 10.4009 9.12119 11.1819L1.7677 18.5354"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function SettingsModal({ className }: { className?: string }) {
  const { isOpen, close, open, dropdownRef } = useDropdown();

  const [activeSlippage, setActiveSlippage] = useState<TypeSlippage>(0);
  const [activeGasPrice, setActiveGasPrice] = useState<TypeGasPrice>("Normal");

  return (
    <>
      {" "}
      <BlackBlur open={isOpen} />
      <div className={cn("w-full", className)} ref={dropdownRef}>
        <SetIcon
          className="ml-auto text-[#9B9898] hover:text-white duration-500 cursor-pointer"
          onClick={open}
        />
        <div
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500",
            "w-[calc(100vw-20px)] lg:w-[730px] bg-c-primary rounded-r-primary bg-[#37383D]-r-primary z-[2222225]",
            "pt-5 pb-5 sm:pb-7 3xl:pt-[38px] 3xl:pb-[44px] px-3 sm:px-[45px] w-[730px]",
            isOpen ? "scale-y-[1] opacity-[1]" : "scale-y-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "w-full flex justify-between items-center",
              "text-[30px] text-white font-bold"
            )}
          >
            Settings
            <CloseIcon
              className="text-[#9B9898] hover:text-white duration-500 cursor-pointer"
              onClick={close}
            />
          </div>
          <div
            className={cn(
              "w-full flex justify-between items-center mt-[43px]",
              "text-base sm:text-xl text-[#9B9898] font-medium"
            )}
          >
            Slippage
            <div className="flex gap-[10px]">
              {TypeSlippage.map((slipNumber: TypeSlippage) => (
                <span
                  onClick={() => {
                    setActiveSlippage(slipNumber);
                  }}
                  className={cn(
                    "flex items-center justify-center duration-500 cursor-pointer",
                    "text-base sm:text-xl font-medium",
                    "w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] rounded-[10px] sm:rounded-r-secondary",
                    "hover:shadow-[0_1px_0_0_#FFF379]",
                    slipNumber === activeSlippage
                      ? "bg-[#FFF379] text-black"
                      : "bg-c-secondary text-[#9B9898]"
                  )}
                >
                  {slipNumber}%
                </span>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "w-full flex justify-between items-center mt-[15px]",
              "text-base sm:text-xl text-[#9B9898] font-medium"
            )}
          >
            Gas price
            <div className="flex gap-[10px]">
              {TypeGasPrice.map((gasPrice: TypeGasPrice) => (
                <span
                  onClick={() => {
                    setActiveGasPrice(gasPrice);
                  }}
                  className={cn(
                    "flex items-center justify-center duration-500 cursor-pointer",
                    "px-3 sm:px-4 py-[10px] sm:py-[13px] rounded-[10px] sm:rounded-r-secondary",
                    "text-base sm:text-xl text-[#9B9898] font-medium",
                    activeGasPrice === gasPrice
                      ? "bg-[#242529]"
                      : "bg-c-primary"
                  )}
                >
                  {gasPrice}
                </span>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "flex items-center gap-1 py-[15px] sm:py-[18px] px-[21px] mt-[25px]",
              "text-base sm:text-xl text-white font-bold leading-[100%]",
              "border-2 border-dashed border-[#45464A] rounded-r-secondary"
            )}
          >
            Dexs
            <span className="ml-auto text-[#9B9898] font-medium">All</span>
            <Arr />
          </div>
          <div
            className={cn(
              "flex items-center gap-1 py-[15px] sm:py-[18px] px-[21px] mt-5",
              "text-base sm:text-xl text-white font-bold leading-[100%]",
              "border-2 border-dashed border-[#45464A] rounded-r-secondary"
            )}
          >
            Bridges
            <span className="ml-auto text-[#9B9898] font-medium">All</span>
            <Arr />
          </div>
          <div
            className={cn(
              "flex items-center gap-1 py-[15px] sm:py-[18px] px-[21px] mt-8 3xl:mt-[50px]",
              "text-base sm:text-xl text-white font-bold leading-[100%]",
              "border-2 border-dashed border-[#45464A] rounded-r-secondary"
            )}
          >
            Route priority
            <span className="ml-auto text-[#9B9898] font-medium">
              Smart sorting
            </span>
            <Arr />
          </div>
        </div>
      </div>
    </>
  );
}
