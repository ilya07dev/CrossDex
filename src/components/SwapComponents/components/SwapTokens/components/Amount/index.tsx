import { useState } from "react";

import { BlackBlur, TokenModal } from "UI";

import { ModalArr, SwapIcon } from "components/Icons";

import { useDropdown } from "hooks";

import { networksMook } from "mook";
import { INetwork } from "mook/types";

import { images } from "assets/img";

import cn from "classnames";

interface IProps {
  className?: string;
  getSelectedNetwork: INetwork | null;
}

export function Amount({ className, getSelectedNetwork }: IProps) {
  const { close, toggle, dropdownRef, isOpen } = useDropdown();
  const [selectedNetwork, setSelectedNetwork] = useState<INetwork>(
    networksMook[0]
  );
  return (
    <article
      className={cn(
        "w-full flex items-center justify-between relative",
        "bg-c-secondary rounded-[20px] px-3.5 2xl:px-7 3xl:px-[55px]  3xl:py-[47.5px]",
        getSelectedNetwork ? "py-[16px]" : "py-6",
        className
      )}
    >
      <div
        className={cn(
          "cursor-pointer group hover:bg-c-primary duration-500",
          "w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] flex items-center justify-center",
          "absolute left-1/2 -translate-x-1/2 bg-[#FFF379] rounded-[10px] sm:rounded-[20px]",
          getSelectedNetwork
            ? "-bottom-[20px] sm:-bottom-[30px] 3xl:-bottom-[40px]"
            : "-bottom-[30px] sm:-bottom-[38px] 3xl:-bottom-[40px]"
        )}
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
              src={selectedNetwork.icon}
              alt="img"
            />
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={images.usdc}
              alt=""
            />
          </div>

          {selectedNetwork.name}
          <ModalArr />
        </button>
        {getSelectedNetwork && (
          <span
            className={cn(
              "mt-[7.8px] flex items-center justify-center gap-[3px]",
              "text-[#9B9898] text-xl font-medium leading-[100%]"
            )}
          >
            Balance: <span className="text-white">0</span>
          </span>
        )}
        <TokenModal
          setSelectedNetwork={setSelectedNetwork}
          isOpen={isOpen}
          close={close}
          className=""
        />
      </div>
    </article>
  );
}
