

import cn from "classnames";
import { ApprovalsTx } from "query/useGetApprovals";
import { ItemApprove } from "./item";
import { Loading, LoadingStatus } from "UI/Loading";

interface IProps {
  className?: string;
  currentTokens: ApprovalsTx[] | string;
}

const tableHead = ["Asset", "Approved Spender", "Allowance", "Date", "Action"];

export function Table({ className, currentTokens }: IProps) {
  
  if (currentTokens.length && currentTokens.length > 0) {
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
            "custom_scroll",
            "sm:overflow-y-scroll rounded-r-primary"
          )}
          // ref={tableRef}
        >
          {typeof currentTokens === 'string' ?
            <Loading status={LoadingStatus.LOADING} />
          :
          currentTokens.map((token, i) => (
            <ItemApprove 
              token={token}
              i={i}
              lengthTokens={currentTokens.length}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <Loading status={LoadingStatus.NO_DATA} />
    );
  }
}