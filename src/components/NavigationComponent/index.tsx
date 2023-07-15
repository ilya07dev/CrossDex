import { Link } from "react-router-dom";

import { useMediaQuery } from "hooks";

import { RoutesType, routes } from "App";

import { images } from "assets/img";

import cn from "classnames";

interface IProps {
  className?: string;
  activePage: string;
}

export function NavigationComponent({ className, activePage }: IProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <article
      className={cn(
        "h-fit sm:w-[480px] 2xl:w-[610px] 3xl:w-[770px] flex items-center",
        "gap-[15px] pt-[31px] pb-6 sm:py-4 3xl:py-5 px-4 2xl:px-5 3xl:px-[25px]",
        "bg-c-primary rounded-t-r-primary sm:rounded-r-primary sm:relative z-[2000] sm:z-[10]",
        "text-[10px] sm:text-base 2xl:text-xl font-semibold leading-[115%]",
        "fixed bottom-0 left-0 w-screen",
        className
      )}
    >
      {Object.keys(routes).map((key, i) => {
        const route = routes[key as RoutesType];
        if (!isMobile && route.title === "ConnectWallet") return;
        return (
          <Link
            to={route.link()}
            className={cn(
              "w-full flex flex-col sm:flex-row items-center justify-center",
              "gap-3 2xl:gap-[15px] sm:py-[11px] 2xl:py-[17px]",
              "duration-500 rounded-r-secondary sm:hover:bg-[#7f7c56] group",

              activePage === key
                ? "sm:bg-[#FFF379] text-[#FFFFFF] sm:text-[#000000]"
                : "sm:bg-c-secondary text-[#9B9898]"
            )}
            key={i}
          >
            {key !== "ConnectWallet" ? (
              <route.icon
                className={cn(
                  "duration-500 group-hover:text-c-secondary",
                  activePage === key
                    ? "text-[#FFF379] sm:text-black"
                    : "text-[#9B9898] sm:text-[#FFF379]"
                )}
              />
            ) : activePage === key ? (
              <img src={images.metamaskMobileActive} />
            ) : (
              <img src={images.metamaskMobile} />
            )}

            {route.title}
          </Link>
        );
      })}
    </article>
  );
}
