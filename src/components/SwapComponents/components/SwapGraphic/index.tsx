import { GraphicSwapData } from "./components/GraphicData";
import { GraphicHeader } from "./components/GraphicHeader";

import cn from "classnames";
import { useGetInfoToken } from "./model";

export function SwapGraphic() {
  const data = useGetInfoToken();

  return (
    <div
      className={cn(
        "w-full flex flex-col flex-1 sm:mb-[11px] sm:pl-7",
        "mt-5 sm:mt-10 pt-[22px] sm:pt-[30px] pb-[33px] sm:pb-0",
        "rounded-r-primary overflow-hidden bg-c-primary"
      )}
    >
      {data?.tokenInfo && data?.statisticInfo && 
        <>
          <GraphicHeader infoToken={data.tokenInfo} statisticToken={data.statisticInfo}/>
          <GraphicSwapData graphic={data.statisticInfo.graphic} /> 
        </>
      }
    </div>
  );
}
