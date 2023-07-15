import { LockIcon } from "components/Icons";

import cn from "classnames";

export function Blur() {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-[9]",
        "w-screen h-screen bg-[rgba(55,56,61,0.01)] backdrop-blur-[28px]"
      )}
    >
      <LockIcon
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-[8%]",
          "2xl:right-[18%] 3xl:right-[20%]"
        )}
      />
    </div>
  );
}
