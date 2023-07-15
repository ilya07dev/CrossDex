import { extraShortenAddress } from "utils";

import { LinkIcon } from "components/Icons";


import cn from "classnames";
import { ApprovalsTx } from "query/useGetApprovals";
import { useRevoke } from "./model";

interface IProps {
  className?: string;
  currentTokens: ApprovalsTx[];
}

const tableHead = [
  "Asset",
  "Approved Spender",
  "Allowance",
  "Date",
  "Action",
];

export function Table({ className, currentTokens }: IProps) {
  const revoke = useRevoke()

  return (
    <table
      className={cn(
        "flex flex-col sm:w-full text-white  rounded-r-primary",
        className
      )}
    >
      <thead className="w-full pr-5 z-[2] rounded-r-primary relative">
        <tr
          className={cn(
            "w-[calc(100%-20px)] flex justify-between",
            "py-[19px] sm:py-4 3xl:py-5 px-[25px] sm:gap-4 2xl:gap-5",
            "bg-c-primary rounded-r-primary shadow-[10px_30px_30px_#242529]",
            "absolute top-0 left-0"
          )}
        >
          {tableHead.map((el: string, i) => (
            <th
              key={el + i}
              className={cn(
                "w-fit sm:w-full px-6 sm:px-2 py-[11px] sm:py-3",
                "bg-c-secondary rounded-[15px] sm:rounded-r-secondary",
                "text-[15px] sm:text-xl 2xl:text-[23px] 3xl:text-[30px]",
                "font-medium leading-[120%] sm:leading-[100%] 3xl:leading-[120%]"
              )}
            >
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody
        className={cn(
          "w-[820px] sm:w-full pb-5 h-full sm:h-[calc(100vh-300px)] 2xl:h-[calc(100vh-320px)] 3xl:h-[calc(100vh-510px)]",
          "mt-[95px] sm:mt-[83px] 3xl:mt-[100px] pr-[10px] pb-5",
          "custom_scroll scrollbar scrollbar-track-transparent scrollbar-thumb-[#37383D]",
          "sm:overflow-y-scroll rounded-r-primary"
        )}
      >
        {currentTokens.map((token, i) => (
          <tr
            key={token.date+token.logo}
            className={cn(
              "flex justify-between items-center",
              "mt-3 3xl:mt-5 py-[16.7px] sm:py-4 3xl:py-5 px-[25px] gap-4 2xl:gap-5",
              "text-[15px] sm:text-xl 3xl:text-[25px]",
              "font-semibold text-center leading-[100%] 3xl:leading-[120%]",
              "w-full bg-c-primary rounded-r-primary",
              i === 0 && "z-[3] relative",
              currentTokens &&
                i === currentTokens.length - 1 &&
                "z-[3] relative"
            )}
          >
            <td className="w-full flex items-center gap-[10px] sm:gap-[15px]">
              <img
                className="w-[30px] sm:w-10 h-[30px] sm:h-10 3xl:w-[50px] 3xl:h-[50px] rounded-full"
                src={token.logo}
                alt=""
              />
              <span className="ml-[10px] sm:ml-0">
                {token.symbol}
              </span>
              <LinkIcon />
            </td>
            <td
              className={cn(
                "w-full flex items-center justify-center text-center",
                "gap-[10px] sm:gap-[15px] mx-auto self-center"
              )}
            >
              <span className="">
                {extraShortenAddress(token.spender)}
              </span>
              <LinkIcon />
            </td>
            <td className="w-full">{token.value}</td>
            <td className="w-full">{token.date}</td>
            <td className="sm:w-full">
              <button
                className={cn(
                  "block w-fit ml-auto py-[13.2px] px-5 sm:px-12",
                  "rounded-r-secondary border-2 border-[#7BE9A5]",
                  "animated-button font-semibold leading-[100%] 3xl:leading-[114%]"
                )}
                onClick={revoke(token.addressContract, token.spender)}
              >
                <span className="relative z-[1]">Revoke</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
