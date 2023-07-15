import { useAccount, useDisconnect } from "wagmi";

import { Link } from "react-router-dom";

import { routes } from "App";

import { LogoIcon, MetaMaskIcon } from "components/Icons";
import { ConnectModal } from "./components/ConnectModal";

import { shortenAddress } from "utils";

import cn from "classnames";

export function Connect() {
  const {address, } = useAccount();
  const {disconnect} = useDisconnect();

  return (
    <div className="flex items-center gap-[50px] w-fit relative z-[106]">
      <Link
        to={routes.Approvals.link()}
        className={cn(
          "flex items-center gap-[21px]",
          "text-[22px] text-white font-bold"
        )}
      >
        <LogoIcon />
        CrossDex
      </Link>
      {address ? (
        <button
          onClick={() => disconnect()}
          className={cn(
            "hidden sm:flex items-center gap-[15px] py-3 pl-[14px] pr-[26px]",
            "text-xl font-semibold bg-[#7BE9A5] rounded-r-secondary group"
          )}
        >
          <MetaMaskIcon className="group-hover:scale-110 duration-500" />
          {shortenAddress(address)}
        </button>
      ) : (
        <>
          <ConnectModal className="hidden sm:block" />
        </>
      )}
    </div>
  );
}
