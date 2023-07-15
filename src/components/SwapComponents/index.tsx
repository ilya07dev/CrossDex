import { SwapGraphic } from "./components/SwapGraphic";
import { TestBlock } from "./components/TestBlock";
import { SwapTrends } from "./components/SwapTrends";
import { SwapSearch } from "./components/SwapTrends/components/SwapSearch";

import { NavigationComponent } from "../NavigationComponent";

import cn from "classnames";
import { routes } from "App";

export function SwapComponents({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "sm:w-full h-full flex-[1_0_auto] sm:flex-1 flex relative",
        "mb-[216px] sm:mb-0 pr-[22px] sm:pr-0 sm:gap-[30px]",
        className
      )}
    >
      <div
        className={cn(
          "sm:flex-1 flex flex-col justify-between",
          "sm:gap-[30px] sm:mt-[20px] 3xl:mt-[8px]"
        )}
      >
        <TestBlock className="hidden sm:block" />
        <NavigationComponent
          activePage={routes.Swap.title}
          className="sm:mb-[11px]"
        />
      </div>
      <div className="flex flex-col flex-1 mt-5 sm:-mt-[80px] 3xl:-mt-[95px]">
        <SwapTrends />
        <TestBlock className="block sm:hidden mt-5" />
        <SwapSearch className="flex sm:hidden mt-10" />
        <SwapGraphic />
      </div>
    </section>
  );
}
