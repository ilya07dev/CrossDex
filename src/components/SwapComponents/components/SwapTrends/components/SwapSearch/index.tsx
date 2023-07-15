import { Icon } from "components/Icons";

import cn from "classnames";

export function SwapSearch({ className }: { className?: string }) {
  return (
    <div className={cn("w-full gap-[31px]", className)}>
      <div
        className={cn(
          "flex items-center gap-[10px] sm:gap-[15px]",
          "text-[15px] sm:text-[30px] text-white font-medium"
        )}
      >
        <Icon
          className={cn(
            "sm:min-h-10 sm:max-h-10 sm:max-w-10 sm:min-w-10",
            "min-h-[30px] max-h-[30px] max-w-[30px] min-w-[30px]"
          )}
          src=""
        />
        BNB
      </div>
      <input
        placeholder="Search"
        className={cn(
          "flex-1 w-full px-[18px] py-[11.5px] sm:py-[13.5px] sm:p-[18px]",
          "outline-none bg-c-primary rounded-[15px] sm:rounded-r-secondary",
          "text-[15px] sm:text-xl text-[#9B9898] placeholder:text-[#9B9898] font-medium",
          "duration-500 focus:shadow-[#fff] shadow-sm"
        )}
        type="text"
      />
    </div>
  );
}
