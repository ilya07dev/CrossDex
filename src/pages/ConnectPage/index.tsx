import { Connect, ConnectPreview } from "UI";

import { routes } from "App";

import { LockIcon } from "components/Icons";
import { NavigationComponent } from "components/NavigationComponent";

import cn from "classnames";

export function ConnectPage() {
  return (
    <main
      className={cn(
        "flex flex-col items-center px-[21px]",
        "min-h-screen w-screen overflow-x-hidden relative bg-c-secondary",
        "pt-[30px] px-[22px]"
      )}
    >
      <Connect />

      <section className="flex flex-col flex-[1_1_auto] items-center">
        <LockIcon className="mt-[17px]" width={55} height={63} />
        <ConnectPreview className="relative mt-[17px] flex-1 mb-[128px]" />
        <NavigationComponent activePage={routes.ConnectWallet.title} />
      </section>
    </main>
  );
}
