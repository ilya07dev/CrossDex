import { Icon, GrowIcon } from "components/Icons";

import cn from "classnames";
import { tokensType } from "./config";
import { convertNumbers } from "utils";
import { Link } from "react-router-dom";
import { useStore } from "effector-react";
import { $choseChain } from "config/stateChain";
import { imgError, mockTokenImage } from "mook/linkImg";

interface ICategorieProps {
  className?: string,
  title:string,
  tokens:tokensType[],
}

export function Categorie({ className,title, tokens }: ICategorieProps) {
  
  const chain = useStore($choseChain)
  
  return (
    <article
      className={cn(
        "py-[17.5px] px-5 sm:py-5 3xl:pt-[39px] 3xl:pr-[58px] 3xl:pb-[44px] 3xl:pl-[45px]",
        "text-white text-[15px] sm:text-lg 2xl:text-xl 3xl:text-[25px]",
        "bg-c-primary rounded-r-primary",
        className
      )}
    >
      <h3 className="font-semibold leading-[100%] sm:leading-[120%]">
        {title}
      </h3>
      <div
        className={cn(
          "flex flex-col font-medium",
          "gap-[10px] sm:gap-[18px] mt-[19px] sm:mt-[35px]"
        )}
      >

        {tokens.map((token) => {
          const isGrow:boolean = +token.changePercent >= 0;
          return (
            <Link
              to={`/?pairAddress=${token.address}&network=${chain}`}
            
              className={cn(
                "grid grid-cols-[auto_1fr_1fr]",
                "gap-[10px] sm:gap-[18px]"
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-2 3xl:gap-[15px]",
                  "h-[22px] overflow-y-hidden sm:h-auto"
                )}
              >
                <Icon
                  className={cn(
                    "min-w-[22.9px] max-w-[22.9px]",
                    "sm:min-w-[50px] sm:max-w-[50px]"
                  )}
                  width={40}
                  height={40}
                  src={token.logo ?? mockTokenImage}
                  onError={imgError}
                />
                {token.name}
              </div>
  
              <span className="flex items-center gap-1 justify-end">
                <GrowIcon className="hidden sm:block" result={isGrow} />
                {convertNumbers(token.changeToken)}$
              </span>
  
              <span className="flex items-center gap-1 justify-end">
                <GrowIcon result={isGrow} />
                {convertNumbers(token.changePercent)}%
              </span>
            </Link>
          )
        })}

        

        {/* <div
          className={cn(
            "flex items-center gap-2 3xl:gap-[15px]",
            "h-[22px] overflow-y-hidden sm:h-auto"
          )}
        >
          <BtcIcon
            className={cn(
              "min-w-[22.9px] max-w-[22.9px]",
              "sm:min-w-[50px] sm:max-w-[50px]"
            )}
          />
          Bitcoin
        </div>
        <span className="flex items-center gap-1 justify-end">
          <GrowIcon className="hidden sm:block" result={false} />
          0.01035
        </span>
        <span className="flex items-center gap-1 justify-end">
          <GrowIcon result={false} />
          0.02%
        </span>
        <div
          className={cn(
            "flex items-center gap-2 3xl:gap-[15px]",
            "h-[22px] overflow-y-hidden sm:h-auto"
          )}
        >
          <BtcIcon
            className={cn(
              "min-w-[22.9px] max-w-[22.9px]",
              "sm:min-w-[50px] sm:max-w-[50px]"
            )}
          />
          Bitcoin
        </div>
        <span className="flex items-center gap-1 justify-end">
          <GrowIcon className="hidden sm:block" result={false} />
          0.01035
        </span>
        <span className="flex items-center gap-1 justify-end">
          <GrowIcon result={false} />
          0.02%
        </span> */}
      </div>
    </article>
  );
}
