import { useState } from "react";

import { MainModal } from "./components/MainModal";
import { MoreModal } from "./components/MoreModal";

import { TypeModal } from "./types";
import { NetworksI } from "./components/MainModal/config/chains";
import {Event} from 'effector';
import { choiseTokenI } from "components/SwapComponents/components/SwapTokens/model";
import { tokensBridge } from "query/useGetTokensBridge";

interface IProps {
  className?: string;
  isOpen: boolean;
  close: () => void;
  setSelectedNetwork:Event<NetworksI>,
  setSelectedToken:Event<tokensBridge | null>,
  
}

export function TokenModal({ isOpen, close, setSelectedNetwork, setSelectedToken }: IProps) {
  const [active, setActive] = useState<TypeModal>("main");

  switch (active) {
    case "main":
      return (
        <MainModal
          setSelectedToken={setSelectedToken}
          isOpen={isOpen}
          close={close}
          setSelectedNetwork={setSelectedNetwork}
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
