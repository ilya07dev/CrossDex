

import { Blur, Connect, ConnectPreview } from "UI";
import {useAccount} from 'wagmi'

import { useMediaQuery } from "hooks";

import { ApprovalsComponents } from "components/ApprovalsComponents";

import cn from "classnames";

export function ApprovalsPage() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const {address} = useAccount();

  
  return (
    <main
      className={cn(
        "flex flex-col items-center sm:items-baseline",
        "min-h-screen w-screen overflow-x-hidden sm:max-w-[100vw] sm:max-h-screen sm:overflow-hidden relative bg-c-secondary",
        "pt-[30px] sm:pt-[30px] pb-[143px] sm:pb-[20px] pl-[22px] sm:px-5 xl:px-10 2xl:px-[65px] 3xl:p-[100px]"
      )}
    >
      <Connect />
      {!address && !isMobile && (
        <>
          <Blur />
          <ConnectPreview
            className={cn(
              "absolute top-[100px] 3xl:top-[180px] z-[18]",
              "h-[calc(100vh-240px)] 3xl:h-[calc(100vh-420px)]"
            )}
          />
        </>
      )}
      <ApprovalsComponents className="sm:mt-6 3xl:mt-10" />
    </main>
  );
}
