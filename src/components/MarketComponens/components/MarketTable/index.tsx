import { GrowIcon } from "components/Icons";

import { MarketGraphic } from "./Components/MarketGraphic";

import cn from "classnames";
import { tokenResultMarket } from "query/useGetMarket";
import { convertGrow } from "utils/convertGrow";
import { convertNumbers } from "utils";
import { Link } from "react-router-dom";
import { useStore } from "effector-react";
import { $choseChain } from "config/stateChain";

interface IProps {
  className?: string;
  currentTokens: tokenResultMarket[];
}

export function MarketTable({ className, currentTokens }: IProps) {
  const tableHead = [
    "Name",
    "Price",
    "24h %",
    "holders",
    "txCount",
    "Market Cap",
    "Volume 24h",
    "Swaps 24h",
    "Last 7d",
  ];
  const chain = useStore($choseChain);

  return (
    <table
      className={cn(
        "flex flex-col w-full text-white  rounded-r-primary",
        className
      )}
    >
      <thead className="w-full pr-[20px] z-[2] rounded-r-primary relative">
        <tr
          className={cn(
            "grid grid-cols-[13%_8%_8%_8%_9%_14%_13%_13%_14%] sm:grid-cols-[14%_8%_8%_8%_8%_14%_13%_12%_14%] 2xl:grid-cols-[14%_8%_8%_8%_8%_14%_14%_12%_14%]",

            "w-[1200px] sm:w-full shadow-[10px_30px_30px_#242529] justify-end",
            "py-[15px] sm:py-4 3xl:py-5 px-[19.5px] sm:px-[25px]",
            "bg-c-primary rounded-[23px] sm:rounded-r-primary relative text-right"
          )}
        >
          {tableHead.map((el: string, i) => (
            <th
              key={el + i}
              className={cn(
                "w-fit py-[14px] px-[18px] sm:p-3 3xl:p-[18px]",
                "bg-c-secondary rounded-[15px] sm:rounded-r-secondary",
                "text-[15px] sm:text-base 2xl:text-lg 3xl:text-xl font-medium leading-[120%]",
                i === 0 ? "mr-auto" : "ml-auto"
              )}
            >
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody
        className={cn(
          "w-[1220px] sm:w-full h-full sm:h-[600px] 3xl:h-[630px] pr-[10px] pt-5 -mt-5 pb-3",
          "overflow-y-scroll rounded-[15px] sm:rounded-r-primary",
          "custom_scroll"
        )}
      >
        {currentTokens.map((token, index) => (
          <Link
            to={`/?pairAddress=${token.address}&network=${chain}`}
            key={token.logo}
            className={cn(
              "grid grid-cols-[13%_8%_8%_8%_9%_14%_13%_13%_14%] sm:grid-cols-[14%_8%_8%_8%_8%_14%_13%_12%_14%] 2xl:grid-cols-[14%_8%_8%_8%_8%_14%_14%_12%_14%]",
              "w-full items-center mt-3 3xl:mt-5 py-4 3xl:py-5 px-[19px] sm:px-[25px]",
              "text-[15px] sm:text-base 2xl:text-lg 3xl:text-[25px]",
              "font-semibold text-right leading-[100%] 3xl:leading-[116%]",
              "bg-c-primary rounded-[23px] sm:rounded-r-primary"
            )}
          >
            <td className="flex items-center gap-3 3xl:gap-[20px]">
              <img
                className={cn(
                  "w-[30px] sm:w-8 h-[30px] sm:h-8 rounded-full",
                  "2xl:w-10 2xl:h-10 3xl:w-[50px] 3xl:h-[50px]"
                )}
                src={token.logo}
                alt=""
              />
              <div className="flex flex-col gap-[2px]">
                <span className="max-w-20">{token.name.split(" ")[0]}</span>

                <span className="text-[#9B9898] ml-auto pr-4">
                  {token.symbol}
                </span>
              </div>
            </td>

            <td>{convertNumbers(token.price)}</td>
            <td className="3xl:text-xl text-right flex items-center justify-end gap-1">
              <GrowIcon result={convertGrow(token.price24h)} />
              <span>{convertNumbers(token.price24h)}</span>
            </td>
            <td className="3xl:text-xl text-right flex items-center justify-end gap-1">
              {convertNumbers(token.holders)}
            </td>
            <td className="3xl:text-xl flex items-center justify-end gap-1">
              {convertNumbers(token.txCount)}
            </td>
            <td>{token.mcap}$</td>
            <td>
              {convertNumbers(token.volume24h)}$
              <p className="text-xl text-[#9B9898] font-semibold mt-1">
                {convertNumbers(token.volume24hBtc)} BTC
              </p>
            </td>
            <td>{convertNumbers(token.swaps24h)}</td>

            <MarketGraphic index={index} address={token.address} />
          </Link>
        ))}
      </tbody>
    </table>
  );
}
