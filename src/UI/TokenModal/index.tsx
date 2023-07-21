import { useState } from "react";

import { MainModal } from "./components/MainModal";
import { MoreModal } from "./components/MoreModal";

import { TypeModal } from "./types";
import {Event} from 'effector';
import { networkSwapType, tokenSwapType } from "components/SwapComponents/components/SwapTokens/model";
import { isSwap } from "query/useGetTokensBridge";

interface IProps {
  className?: string;
  isOpen: boolean;
  close: () => void;
  setSelectedNetwork:Event<networkSwapType>,
  setSelectedNetworkFilter:Event<networkSwapType>,
  setSelectedToken:Event<tokenSwapType>,
  searchTokens:Event<string>,
  isSwap:isSwap
}

export function TokenModal({ 
  isOpen, 
  close, 
  setSelectedNetwork, 
  setSelectedNetworkFilter,
  setSelectedToken,
  isSwap,
  searchTokens
}: IProps) {
  const [active, setActive] = useState<TypeModal>("main");

  switch (active) {
    case "main":
      return (
        <MainModal
          searchTokens={searchTokens}
          isSwap={isSwap}
          setSelectedNetworkFilter={setSelectedNetworkFilter}
          setSelectedToken={setSelectedToken}
          setSelectedNetwork={setSelectedNetwork}
          isOpen={isOpen}
          close={close}
          setActive={setActive}
        />
      );
    case "more":
      return (
        <MoreModal
          isOpen={isOpen}
          setSelectedNetwork={setSelectedNetwork}
          setActive={setActive}
          close={close}
        />
      );
  }
}
