import { ArrModalIcon, CloseIcon } from "components/Icons";

import { networksMook } from "mook";

import { INetwork } from "mook/types";

import { TypeModal } from "../../types";

import cn from "classnames";
import {Event} from 'effector';
import { NetworksI } from "../MainModal/config/chains";

interface IProps {
  setActive: (el: TypeModal) => void;
  close: () => void;
  isOpen: boolean;
  setSelectedNetwork:Event<NetworksI>
}

export function MoreModal({
  setActive,
  close,
  isOpen,
}: IProps) {
  return (
    <>
      <div
        className={cn(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500",
          "w-[calc(100vw-20px)] lg:w-[730px] bg-c-primary rounded-r-primary z-[2222225]",
          "pt-5 pb-5 sm:pb-7 3xl:pt-[38px] 3xl:pb-[44px] px-3 sm:px-[45px] w-[730px]",
          isOpen ? "scale-y-[1] opacity-[1]" : "scale-y-0 opacity-0"
        )}
      >
        <div
          className={cn(
            "w-full flex items-center gap-[19px]",
            "text-[30px] text-white font-bold"
          )}
        >
          <span
            onClick={() => {
              setActive("main");
            }}
          >
            <ArrModalIcon className="rotate-90 ml-auto cursor-pointer" />
          </span>
          Select token
          <CloseIcon
            onClick={() => {
              close();
              // setActive("main");
            }}
            className="ml-auto text-[#9B9898] hover:text-white duration-500 cursor-pointer"
          />
        </div>
        <span
          className={cn(
            "block mt-3 sm:mt-5 3xl:mt-[43px]",
            "text-[#9B9898] text-xl font-medium"
          )}
        >
          26 networks
        </span>
        <div
          className={cn(
            "grid grid-cols-3 sm:grid-cols-5 mt-[10px] gap-[10px]",
            "max-h-[400px] sm:max-h-[470px] overflow-y-scroll scrollbar scrollbar-track-transparent custom_scroll"
          )}
        >
          {networksMook.map((el: INetwork, i: number) => (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center bg-c-secondary rounded-r-secondary cursor-pointer",
                "gap-2 sm:gap-[10px] py-3 sm:py-[18px] px-5 sm:px-[30.5px]",
                "text-base text-[#9B9898] hover:text-white font-medium duration-500"
              )}
              onClick={() => {
                // setSelectedNetwork(el);
                // setActive("main");
                close();
              }}
            >
              <img
                src={el.icon}
                className={cn(
                  "min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px]",
                  "sm:min-w-[40px] sm:max-w-[40px] sm:min-h-[40px] sm:max-h-[40px]"
                )}
                alt="img"
              />
              Polygon
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
