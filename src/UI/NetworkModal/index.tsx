import { useEffect, useState } from "react";

import { INetwork, IProps } from "./types";

import { BlackBlur } from "../BlackBlur";

import { images } from "assets/img";

import cn from "classnames";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { chainsActive } from "config/blockchain";

const setNetwork: INetwork[] = [
  {
    icon: images.ethNetwork,
    name: "ETH",
  },
  {
    icon: images.bscNetwork,
    name: "BSC",
  },
  {
    icon: images.polygonNetwork,
    name: "Matic (Polygon)",
  },
];

export function NetworkModal({ className }: IProps) {
  const [open, setOpen] = useState(false);
  const {chain} = useNetwork();
  const {switchNetworkAsync} = useSwitchNetwork();
  const {address} = useAccount();

  // @ts-ignore
  useEffect(() => {
    const ethereum:any = window.ethereum;

    if(
      ethereum === undefined && 
      !address &&
      !chain
    ) return null;

    const handleChainChanged = (chainId:number | undefined) =>  {
      if(chainsActive.filter((chain) => chain.id === chainId).length) return setOpen(false);

      setOpen(true);
    }

    if(chain) handleChainChanged(chain?.id)

    ethereum!.on('chainChanged', (chainId:string) => handleChainChanged(Number(chainId)));
    // return ethereum!.removeListener('chainChanged', (chainId:string) => handleChainChanged(Number(chainId)));
  }, [chain, address]);


  const changeNetwork = (chainId:number) => async () => {
    const chooseChain = await switchNetworkAsync?.(chainId);
    if(chooseChain?.id === chainId) return setOpen(false)
  }

  return (
    <>
      <BlackBlur open={open} />
      <article
        className={cn(
          "fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10001] bg-c-primary rounded-r-primary duration-500",
          "w-[calc(100vw-20px)] lg:w-fit lg:min-w-max flex flex-col gap-5 sm:gap-10 p-4 sm:px-[46px] sm:pt-[38px] sm:pb-[47px]",
          className,
          open ? "opacity-[1] scale-y-[1]" : "opacity-[0] scale-y-[0]"
        )}
      >
        <div className="flex items-center gap-5">
          {/* <ArrIcon
            className="cursor-pointer text-white hover:text-[#9B9898] duration-500"
          /> */}
          <h3 className="text-[25px] sm:text-[30px] text-white font-bold">
            Choose network
          </h3>
          {/* <CloseIcon
            className="ml-auto cursor-pointer text-[#9B9898] hover:text-white duration-500"
          /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 items-center gap-[10px]">
          {setNetwork.map((network: INetwork, i: number) => (
            <div
              key={network.name}
              className={cn(
                "h-full lg:min-w-fit flex flex-col items-center text-center gap-5",
                "text-xl text-[#9B9898] font-medium leading-[100%]",
                "py-4 sm:pt-[33px] sm:pb-[22px] sm:px-[60px] rounded-[34px] bg-c-secondary pointer"
              )}
              onClick={changeNetwork(chainsActive[i].id)}

            >
              <img
                className={cn(
                  "cursor-pointer",
                  "min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]",
                  "sm:min-w-[85px] sm:min-h-[85px] sm:max-w-[85px] sm:max-h-[85px]"
                )}
                src={network.icon}
                alt={network.name}
              />
              <span className="my-auto">{network.name}</span>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
