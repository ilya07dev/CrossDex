import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { routes } from "App";

import { Connect } from "UI";

import { ArrIcon } from "components/Icons";
import { NavigationComponent } from "components/NavigationComponent";
import { MarketComponents } from "components/MarketComponens";

import cn from "classnames";

export function MarketPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  
  return (
    <section
      className={cn(
        "min-h-screen bg-c-secondary",
        "pt-[20px] px-[21.5px] sm:px-10 pb-[159px] sm:pb-[60px]",
        "2xl:px-[65px] 3xl:pt-[90px] 3xl:px-[100px]"
      )}
    >
      <div className="flex flex-col items-center sm:flex-row gap-5 sm:gap-[92px]">
        <Connect />
        <input
          value={search}
          onChange={(el) => setSearch(el.target.value)}
          placeholder="Search"
          className={cn(
            "w-full flex-1 p-[18.6px] outline-none bg-c-primary rounded-r-secondary",
            "text-[19px] sm:text-xl text-[#9B9898] placeholder:text-[#9B9898] font-medium",
            "duration-500 focus:shadow-[#fff] leading-[120%] shadow-sm"
          )}
          type="text"
        />
        <button
          className={cn(
            "hidden sm:flex items-center gap-[15px] py-3 px-[23px]",
            "border-2 border-dashed border-[#45464A] rounded-r-secondary",
            "text-[30px] font-semibold text-white",
            "hover:border-[#000] duration-500 group"
          )}
          onClick={() => navigate(-1)}
        >
          <ArrIcon
            className={cn(
              "group-hover:-translate-x-2 duration-500",
              "text-white group-hover:text-black"
            )}
          />
          Back
        </button>
      </div>
      <MarketComponents className="mt-5 sm:mt-20" />
      <NavigationComponent
        activePage={routes.Market.title}
        className="sm:hidden"
      />
    </section>
  );
}
