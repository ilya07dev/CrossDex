import { SwapMarquee } from "./components/SwapMarquee";
import { SelectChainModal } from "./components/SwapMarquee/components/SelectChainModal";
import { SwapSearch } from "./components/SwapSearch";

import cn from "classnames";

interface IProps {
  className?: string;
}

export function SwapTrends({ className }: IProps) {
  return (
    <div className={cn("flex flex-col gap-10 ", className)}>
      <div className="w-full flex flex-col sm:flex-row items-center gap-[15px] sm:gap-[30px]">
        <SelectChainModal /> <SwapMarquee />
      </div>
      <SwapSearch className="hidden sm:flex" />
    </div>
  );
}
