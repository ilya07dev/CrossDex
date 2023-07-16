import { Connect } from "UI";

import { SwapComponents } from "components/SwapComponents";

import cn from "classnames";
import { useNavigateToken } from "./model";

export function SwapPage() {
  useNavigateToken();
  return (
    <main
      className={cn(
        "flex flex-col items-center sm:items-baseline",
        "min-h-screen w-screen overflow-x-hidden relative bg-c-secondary",
        "2xl:w-screen 2xl:h-screen 2xl:overflow-hidden",
        "pt-[30px] sm:pt-[30px] sm:pb-[20px] pl-[22px] sm:px-5 xl:px-10 2xl:px-[65px] 3xl:p-[100px]"
      )}
    >
      <Connect />
      <SwapComponents className="sm:mt-6 3xl:mt-10" />
    </main>
  );
}
