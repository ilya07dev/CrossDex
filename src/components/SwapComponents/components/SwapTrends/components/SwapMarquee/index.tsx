import Marquee from "react-fast-marquee";

import cn from "classnames";

import { trendsTokens, useGetTrends } from "query/useGetTrends";
import { mockTokenImage } from "mook/linkImg";
import { Link } from "react-router-dom";

// const appChain = 56;

export const SwapMarquee = () => {
  const data:trendsTokens[] = useGetTrends()
  return (
    <div
      className={cn(
        "flex-1 flex items-center bg-c-primary rounded-[15px] sm:rounded-r-primary text-white",
        "w-[calc(100vw-42px)] sm:max-w-[39vw] pr-5"
      )}
    >
      <button
        className={cn(
          "pt-[13px] pb-[14px] sm:py-3 px-[14px] sm:px-[18px]",
          "bg-[#7880F1] rounded-[15px] sm:rounded-r-secondary",
          "text-[15px] sm:text-[30px] font-bold leading-[120%]"
        )}
      >
        HOT
      </button>
      <Marquee
        gradient={false}
        className={cn(
          "flex flex-grow flex-shrink items-center",
          "w-full overflow-y-clip pr-5"
        )}
      >
        {data.map((trendToken) => (
          <Link
            key={trendToken._id}
            to={`/?pairAddress=${trendToken.address}&network=${trendToken.chainId}`}
            className={cn(
              "flex items-center cursor-pointer",
              "gap-[5px] sm:gap-[15px] mx-[15px] 3xl:mx-[26px]"
            )}
          >
            <img
              className="w-4 sm:w-10 h-4 sm:h-10 rounded-full"
              src={trendToken.baseTokenLogo || mockTokenImage}
              alt=""
            />
            <span className="font-medium text-[12px] sm:text-[30px] sm:text-lg">
              {trendToken.baseTokenSymbol}
            </span>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};
