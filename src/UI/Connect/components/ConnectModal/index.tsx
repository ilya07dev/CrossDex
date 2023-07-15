import { useAccount, useConnect, useDisconnect } from "wagmi";

import { useDropdown, useMediaQuery } from "hooks";

import { shortenAddress } from "utils";

import { ArrIcon, MetamaskModalIcon } from "components/Icons";

import { images } from "assets/img";

import cn from "classnames";
import { connectorMetamask } from "config/blockchain";

interface IProps {
  className?: string;
}

export function ConnectModal({ className }: IProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { isOpen, toggle, dropdownRef, close } = useDropdown();

  const { connect} =useConnect()
  const {address} = useAccount();
  const {disconnect} = useDisconnect();

  return (
    <div ref={dropdownRef} className={cn("", className)}>
      <button
        onClick={toggle}
        className={cn(
          "flex items-center gap-[15px] py-3 pl-[14px] pr-[26px] relative",
          "text-xl font-semibold bg-[#7BE9A5] rounded-r-secondary group"
        )}
      >
        <img
          className="block sm:hidden group-hover:scale-110 duration-500"
          src={images.metamaskConnectImg}
          alt=""
        />
        <MetamaskModalIcon className="hidden sm:block group-hover:-translate-x-[5px] duration-500" />
        <span className="text-[#000000] group-hover:translate-x-3 duration-500">
          {address && isMobile ? shortenAddress(address) : "Connect wallet"}
        </span>
      </button>
      <section
        className={cn(
          "flex-col bg-[#242529] duration-300",
          "fixed w-screen h-screen left-0 top-0 px-5 sm:px-0",
          "flex justify-center items-center z-[1999] sm:z-[100000]",

          isOpen ? "scale-y-1 opacity-[1]" : "scale-y-0  opacity-0"
        )}
      >
        <article
          className={cn(
            "w-fit h-fit pt-[169px] sm:pt-[200px] 3xl:pt-[257px] pb-[41px] px-[34px] sm:px-[92px]",
            "flex flex-col items-center gap-7 3xl:gap-10 relative",
            "border-2 border-dashed border-[#45464A] rounded-[30px]"
          )}
        >
          <h1
            className={cn(
              "text-[32px] sm:text-[60px] 3xl:text-[70px]",
              "text-white font-bold text-center leading-[120%]",
              "max-w-[253px] sm:max-w-[587px] mx-auto"
            )}
          >
            Please, connect your wallet to get an access
          </h1>
          <div className="flex items-center gap-[10px] sm:gap-[30px] mx-auto">
            <button
              className={cn(
                "flex items-center gap-[15px] py-[18px] sm:py-3 px-[23px]",
                "text-xl sm:text-[30px] text-white font-semibold leading-[120%]",
                "bg-c-primary rounded-r-secondary group"
              )}
              onClick={close}
            >
              <ArrIcon className="text-white group-hover:-translate-x-2 duration-500" />
              Back
            </button>
            <button
              className={cn(
                "py-[18px] px-10 bg-[#7BE9A5] rounded-r-secondary",
                "text-xl font-semibold text-black leading-[120%]",
                "duration-500 hover:shadow-[6px_6px_1px_#224630] hover:scale-[0.95]"
              )}
              onClick={() => {
                address ? disconnect() : connect({connector: connectorMetamask});
                isMobile && close();
              }}
            >
              {isMobile && address ? "disconnect" : "Connect"}
            </button>
          </div>
          <img
            className={cn(
              "absolute left-1/2 -translate-x-1/2 -top-[124px]",
              "w-[277px] sm:w-[340px] 3xl:w-[381px] h-[277px] sm:h-[340px] 3xl:h-[381px]"
            )}
            src={images.metamask}
            alt=""
          />
        </article>
      </section>
    </div>
  );
}
