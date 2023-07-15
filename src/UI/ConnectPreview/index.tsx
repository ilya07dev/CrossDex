import { ConnectModal } from "UI/Connect/components/ConnectModal";

import { ToConnectIcon } from "components/Icons";

import { images } from "assets/img";

import cn from "classnames";

interface IProps {
  className?: string;
}

export function ConnectPreview({ className }: IProps) {
  return (
    <article
      className={cn(
        "w-fit bg-c-primary text-white rounded-r-primary flex flex-col overflow-hidden sm:overflow-visible",
        "pt-8 sm:pt-[65px] pl-[34px] sm:pl-[79px] pr-8 sm:pr-[134px] pb-[39px] sm:pb-[315px]",
        className
      )}
    >
      <h1 className="max-w-[557px] text-[30px] sm:text-[50px] leading-[120%] relative z-[1]">
        Please, connect your wallet to see dApps and revoke your allowance!
      </h1>
      <p
        className={cn(
          "max-w-[251px] sm:max-w-[462px] sm:mb-0 mt-[30px] sm:mt-10 relative z-[1]",
          "text-[15px] sm:text-[25px] leading-[120%]"
        )}
      >
        You can see what dApss had permission to spedn your tokens and NFTs.
      </p>
      <img
        className={cn("absolute bottom-0 left-0")}
        src={images.wallet}
        alt=""
      />

      <ConnectModal className="sm:hidden mt-auto mx-auto" />
      <div
        className={cn(
          "hidden sm:block absolute right-[20px] -top-[60px] 3xl:-top-[73px]"
        )}
      >
        <ToConnectIcon />
      </div>
    </article>
  );
}
