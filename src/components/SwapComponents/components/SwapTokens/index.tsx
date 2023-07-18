
import { useAccount, useConnect, useNetwork } from "wagmi";

import { ConnectArrIcon, MetaMaskIcon } from "components/Icons";

import { Amount } from "./components/Amount";
import { BottomSelect } from "./components/BottomSelect";
import { SettingsModal } from "./components/SettingsModal";

import { shortenAddress } from "utils";

import { images } from "assets/img";

import cn from "classnames";
import { connectorMetamask } from "config/blockchain";

interface IProps {
  className?: string;
}

export function SwapTokens({ className }: IProps) {
  const {chain} = useNetwork();
  const {connect} = useConnect();
  const {address} = useAccount();
  
  return (
    <div
      className={cn(
        "h-auto sm:flex-1 bg-c-primary rounded-r-primary",
        "px-3.5 sm:px-5 2xl:px-[45px] 3xl:px-[70px] p-5", 
        "flex-col items-center justify-center",
        chain ? "sm:py-[10px]" : "sm:py-4",
        className
      )}
    >
      <SettingsModal />

      <Amount
        className={cn(chain ? "mt-[8px] 3xl:mt-5" : "mt-5", "h-full")}
      />

      <BottomSelect
        className={cn(
          chain
            ? "mt-[8px] 3xl:mt-[25px]"
            : "mt-[20px] 3xl:mt-[25px] mb-2",
          "h-full"
        )}
      />
      {address ? (
        <button
          className={cn(
            "w-full flex items-center bg-c-secondary rounded-r-secondary",
            "gap-2 sm:gap-[15px] py-3 px-[15px] sm:pl-[13px] sm:pr-[23px] mt-[8px] 3xl:mt-[15px]",
            "text-sm sm:text-xl text-white font-medium"
          )}
        >
          <img
            className="max-w-8 max-h-8 3xl:max-w-10 3xl:max-h-10"
            src={images.usdc}
            alt="img"
          />
          Receiver's address
          <span className="ml-auto text-base sm:text-xl font-bold">
            {shortenAddress(address)}
          </span>
        </button>
      ) : (
        <button
          className={cn(
            "w-full flex items-center bg-[#7BE9A5] rounded-r-secondary",
            "gap-2 sm:gap-[15px] 3xl:mt-[50px] py-3 px-[15px] sm:pl-[13px] sm:pr-[25px]",
            "text-base sm:text-xl font-semibold",
            chain ? "mt-[8px]" : "mt-5 sm:mb-auto"
          )}
          onClick={() => connect({connector:connectorMetamask})}
        >
          <MetaMaskIcon className="hidden sm:block" />
          <img
            className="block sm:hidden"
            src={images.metamaskConnectImg}
            alt="img"
          />
          Connect wallet
          <ConnectArrIcon className="ml-auto" />
        </button>
      )}
      {/* {chain && (
        <input
          placeholder="Enter amourt"
          className={cn(
            "w-full bg-c-secondary rounded-r-secondary",
            "py-4 3xl:py-[17px] px-[21px] mt-[8px] 3xl:mt-[15px]",
            "placeholder:text-[#9B9898] font-medium leading-[100%]",
            "text-base sm:text-xl 3xl:text-[30px] text-white"
          )}
        />
      )} */}
    </div>
  );
}
