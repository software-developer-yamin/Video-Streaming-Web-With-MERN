import React from "react";
import { IconType } from "react-icons";

type Props = {
  title: string;
  Icon: IconType
};

function Titles({ title, Icon }: Props) {
  return (
    <header className="w-full flex sm:gap-8 gap-4 items-center">
      <Icon className="sm:w-6 sm:h-6 w-4 h-4 text-subMain" />
      <h2 className="sm : text-x1 font-bold text-lg">{title}</h2>
    </header>
  );
}

export default Titles;