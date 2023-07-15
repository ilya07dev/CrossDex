import { CopyIcon, GrowIcon } from "components/Icons";
import { TimeModal } from "./components/TimeModal";

import cn from "classnames";
import { Social } from "./components/Social";
import { infoToken, informationStatisticPair } from "../../config";
import { formattedAddress } from "utils";

interface IProps {
  className?: string;
  infoToken:infoToken,
  statisticToken:informationStatisticPair,
}

export function GraphicHeader({ className, infoToken, statisticToken }: IProps) {
  const isColor = statisticToken.priceChangePercentWhole > 0;

  return (
    <article
      className={cn(
        "w-full flex flex-col-reverse sm:flex-row justify-between",
        "pl-3 pr-3 sm:pr-[27px] gap-[10px] sm:gap-0",
        className
      )}
    >
      <div className="flex flex-col gap-[11px]">
        <div
          className={cn(
            "grid grid-cols-[auto_auto] 2xl:grid-cols-[auto_auto_auto_auto] items-center",
            "gap-y-1 gap-x-5 3xl:gap-x-[30px] text-sm 3xl:text-base text-[#9B9898]"
          )}
        >
          <span>{infoToken.nameToken}</span>
          <span
            className={cn(
              "flex items-center justify-end sm:justify-normal",
              "gap-[6px] 3xl:gap-[10px]"
            )}
          >
            {infoToken.symbolToken} {formattedAddress(infoToken.addressToken)}
            <CopyIcon
              onClick={() => navigator.clipboard.writeText(infoToken.addressToken)}
              className={cn(
                "cursor-pointer duration-500",
                "text-[#9B9898] hover:text-[#7BE9A5]"
              )}
            />
          </span>
          <span className="flex items-center gap-[6px] 3xl:gap-[10px]">
            {infoToken.symbolToken2} {formattedAddress(infoToken.addressToken2)}
            <CopyIcon
              onClick={() => navigator.clipboard.writeText(infoToken.addressToken2)}
              className={cn(
                "cursor-pointer duration-500",
                "text-[#9B9898] hover:text-[#7BE9A5]"
              )}
            />
          </span>
          <span
            className={cn(
              "flex items-center justify-end sm:justify-normal",
              "gap-[6px] 3xl:gap-[10px]"
            )}
          >
            Pair {formattedAddress(infoToken.addressPair)}
            <CopyIcon
              onClick={() => navigator.clipboard.writeText(infoToken.addressPair)}
              className={cn(
                "cursor-pointer duration-500",
                "text-[#9B9898] hover:text-[#7BE9A5]"
              )}
            />
          </span>
        </div>
        <div className="flex items-center justify-between sm:justify-normal gap-[10px]">
          <h2
            className={cn(
              "text-[38px] sm:text-[55px] 3xl:text-[100px]",
              "text-white leading-[120%] font-bold"
            )}
          >
            {infoToken.price}
          </h2>
          <span
            className={cn(
              "flex flex-col items-end sm:items-start",
              `gap-1 sm:gap-2 2xl:gap-[15px]`
            )}
            style={{
              color:isColor ? '#7BE9A5' : '#FF3F3F'
            }}
          >
            <p className="flex items-center gap-[10px] leading-[100%]">
              {statisticToken.priceChangePercent}% <GrowIcon result={isColor} />
            </p>
            <p className="flex items-center gap-[10px] leading-[100%]">
              ${statisticToken.priceChangePercent} <GrowIcon result={isColor} />
            </p>
          </span>
          <Social links={infoToken.socLinks}  className="hidden sm:grid" />
        </div>
      </div>
      <div className="flex sm:flex-col items-center justify-between sm:justify-normal gap-y-[10px]">
        <TimeModal />
        <p className="text-lg text-white">
          <span className="opacity-[0.5]">Vol.</span>
          <span className="ml-3">{statisticToken.volume}</span>
        </p>
      </div>

      <Social links={infoToken.socLinks} className="grid sm:hidden" />
    </article>
  );
}
