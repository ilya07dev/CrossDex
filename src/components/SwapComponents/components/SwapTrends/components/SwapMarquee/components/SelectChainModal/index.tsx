

import { useDropdown, useMediaQuery } from "hooks";

import { ArrModalIcon } from "components/Icons/ArrModalIcon";

import cn from "classnames";
import { useSwitchNetwork, useNetwork } from "wagmi";

interface IProps {
  className?: string;
}

export function SelectChainModal({ className }: IProps) {
  const {chain, chains} = useNetwork();
  const {switchNetworkAsync} = useSwitchNetwork()
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { isOpen, toggle, dropdownRef, close } = useDropdown();
  
  return (
    <div
      ref={dropdownRef}
      className={cn(
        "relative h-fit w-fit font-semibold leading-[110%]",
        "text-[15px] sm:text-[30px] text-white",
        className
      )}
    >
      <div
        onClick={toggle}
        className={cn(
          "sm:min-w-[150px] flex items-center justify-center cursor-pointer",
          "gap-5 py-[13px] px-[15px] sm:px-[21.5px]",
          "border-2 border-dashed rounded-r-secondary duration-300",
          !isOpen ? "border-[#45464A] bg-c-secondary" : "border-transparent"
        )}
      >
        <span className="cursor-pointer">{chain?.nativeCurrency.symbol}</span>
        <ArrModalIcon
          width={isMobile ? 10.7 : 15.7}
          height={isMobile ? 10.7 : 15.7}
          className={cn("duration-300 z-[6]", isOpen && "scale-y-[-1]")}
        />
      </div>
      <aside
        className={cn(
          "w-full flex flex-col bg-c-accent rounded-b-r-accent duration-300",
          "absolute left-0 pb-[10px] pt-[8px] z-[5] bg-c-secondary",
          "border-2 border-dashed rounded-r-secondary border-[#45464A]",
          isOpen
            ? "scale-y-1 top-[0px] opacity-[1]"
            : "scale-y-0 top-[-50px] sm:top-[-73px] opacity-0"
        )}
      >
        {chains.map((el, i) => (
          <span
            className={cn(
              "w-full flex justify-start cursor-pointer leading-[120%]",
              "py-1 pl-[15px] sm:pl-[22px]"
            )}
            onClick={async () => {
              // @ts-ignore
              await switchNetworkAsync(el.id)
              close();
            }}
            key={el.nativeCurrency.symbol}
          >
            {el.nativeCurrency.symbol}
          </span>
        ))}
      </aside>
    </div>
  );
}
