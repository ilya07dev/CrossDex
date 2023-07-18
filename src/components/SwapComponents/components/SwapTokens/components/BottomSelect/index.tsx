import { useState } from "react";

import { BlackBlur, TokenModal } from "UI";

import { ModalArr } from "components/Icons";

import { useDropdown } from "hooks";

import { images } from "assets/img";

import cn from "classnames";
import { useNetwork } from "wagmi";

interface IProps {
  className?: string;
}

export function BottomSelect({
  className,
  
}: IProps) {
  const { close, toggle, dropdownRef, isOpen } = useDropdown();
  const [value, setValue] = useState("");

  const {chain} = useNetwork();
  
  return (
    <>
      <BlackBlur open={isOpen} />
      <article
        ref={dropdownRef}
        className={cn(
          "w-full flex",
          "bg-c-secondary rounded-[20px] ",
          chain
            ? "flex-col justify-between pl-[21px] pr-[24px] py-[15.9px] 3xl:py-[25px]"
            : "items-center justify-center py-[40px] 3xl:py-[60px]",
          className
        )}
      >
        {chain ? (
          <>
            <div className="w-full flex justify-between items-start">
              <input
                value={value}
                onChange={(el) => setValue(el.target.value)}
                placeholder="0.0"
                className="w-1/2 bg-transparent text-[30px] text-[#9B9898] font-medium"
                type="text"
              />
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
                      // src={chain.icon}
                      alt="img"
                    />
                    <img
                      className="absolute top-0 left-0 w-full h-full"
                      src={images.usdc}
                      alt=""
                    />
                  </div>
                  {chain.nativeCurrency.name}
                  <ModalArr />
                </button>
                <TokenModal
                  // setSelectedNetwork={setSelectedNetwork}
                  isOpen={isOpen}
                  close={close}
                  className=""
                />
              </div>
            </div>
            <div
              className={cn(
                "w-fit flex items-center gap-[5px] py-[6px] 3xl:py-[9px] px-[11.5px] mt-2 sm:mt-0",
                "text-base 3xl:text-xl font-medium text-white leading-[100%]",
                "bg-c-primary rounded-[15px]"
              )}
            >
              <img className="w-5 h-5" alt="" />1{" "}
              <span className="text-[#9B9898]">=</span>
              <img className="w-5 h-5" alt="" />
              7.647943
            </div>
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
              // setSelectedNetwork={setSelectedNetwork}
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
