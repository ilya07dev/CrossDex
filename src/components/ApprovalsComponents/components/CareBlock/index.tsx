import { CheckIcon } from "components/Icons";

import cn from "classnames";

export function CareBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-fit items-center bg-c-primary rounded-r-primary",
        "gap-[11px] sm:gap-2 2xl:gap-3 3xl:gap-[22px]",
        "pr-[13px] pl-5 py-[14px] sm:py-4 3xl:py-5 sm:px-5 3xl:px-6",
        className
      )}
    >
      <span
        className={cn(
          "min-w-[60px] max-w-[60px] sm:min-w-[48px] sm:max-w-[48px] 2xl:min-w-[60px] 2xl:max-w-[60px]",
          "min-h-[60px] max-h-[60px] sm:min-h-[48px] sm:max-h-[48px] 2xl:min-h-[60px] 2xl:max-h-[60px]",
          "flex items-center justify-center bg-[#7880F1] rounded-r-secondary"
        )}
      >
        <CheckIcon />
      </span>
      <p
        className={cn(
          "max-w-[213px] sm:max-w-[400px] 3xl:max-w-[536px]",
          "text-[15px] sm:text-base 2xl:text-lg 3xl:text-[22px] text-white leading-[120%]"
        )}
      >
        We care about your privacy and confidentiality! Please, revoke your
        allowances from dApps!
      </p>
    </div>
  );
}
