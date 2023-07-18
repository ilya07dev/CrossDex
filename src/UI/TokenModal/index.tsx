import { useState } from "react";

import { MainModal } from "./components/MainModal";
import { MoreModal } from "./components/MoreModal";

import { TypeModal } from "./types";

interface IProps {
  className?: string;
  isOpen: boolean;
  close: () => void;
}
export function TokenModal({ isOpen, close }: IProps) {
  const [active, setActive] = useState<TypeModal>("main");

  switch (active) {
    case "main":
      return (
        <MainModal
          isOpen={isOpen}
          close={close}
          // setSelectedNetwork={setSelectedNetwork}
          setActive={setActive}
        />
      );
    case "more":
      return (
        <MoreModal
          isOpen={isOpen}
          // setSelectedNetwork={setSelectedNetwork}
          setActive={setActive}
          close={close}
        />
      );
  }
}
