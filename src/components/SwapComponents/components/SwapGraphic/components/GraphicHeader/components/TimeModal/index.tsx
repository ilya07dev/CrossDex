

import { useDropdown, useMediaQuery } from "hooks";

import { ArrModalIcon } from "components/Icons/ArrModalIcon";

import cn from "classnames";
import { useStore } from "effector-react";
import { $timeCuurent, changeTime } from "pages/SwapPage/model";
import { TIME_VARIANTS } from "pages/SwapPage/config";

interface IProps {
  className?: string;
}

const data: {value:TIME_VARIANTS, time:number}[] = [
  {
    value:TIME_VARIANTS.H24,
    time:24,
  },
  {
    value:TIME_VARIANTS.H12,
    time:12,
  },
  {
    value:TIME_VARIANTS.H6,
    time:6,
  },
  {
    value:TIME_VARIANTS.H1,
    time:1,
  },
];

export function TimeModal({ className }: IProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { isOpen, toggle, dropdownRef, close } = useDropdown();
  const currentTime = useStore($timeCuurent);

  return (
    <div
      ref={dropdownRef}
      className={cn(
        "relative h-fit w-fit text-[15px] sm:text-[30px] text-white font-bold",
        className
      )}
    >
      <div
        onClick={toggle}
        className={cn(
          "min-w-fit sm:min-w-[150px] flex items-center justify-center cursor-pointer",
          "gap-5 py-[13.5px] sm:py-3 px-[15px] sm:px-[21.5px]",
          "border-2 border-dashed rounded-r-secondary duration-300",
          !isOpen ? "border-[#45464A]" : "border-transparent"
        )}
      >
        <span className="cursor-pointer">{currentTime.replace("H", "")}h</span>
        <ArrModalIcon
          width={isMobile ? 10.7 : 15.7}
          height={isMobile ? 10.7 : 15.7}
          className={cn("duration-300 z-[6]", isOpen && "scale-y-[-1]")}
        />
      </div>
      <aside
        className={cn(
          "w-full flex flex-col bg-c-accent rounded-b-r-accent duration-300",
          "absolute left-0 pb-[10px] pt-[12px] z-[5] bg-c-secondary",
          "border-2 border-dashed rounded-r-secondary border-[#45464A]",
          isOpen
            ? "scale-y-1 top-[0px] opacity-[1]"
            : "scale-y-0 top-[-73px] opacity-0"
        )}
      >
        {data.map((el) => (
          <span
            className={cn(
              "w-full flex justify-start cursor-pointer leading-[120%]",
              "py-1 pl-[15px] sm:pl-[25px]"
            )}
            onClick={() => {
              changeTime(el.value);
              close();
            }}
            key={el.value}
          >
            {el.time}h
          </span>
        ))}
      </aside>
    </div>
  );
}
