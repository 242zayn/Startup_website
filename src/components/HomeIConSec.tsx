import { HomeIconSecType } from "@/types/types";
import React from "react";

const HomeIConSec = ({
  Icon,
  bg_color,
  boldLine,
  paraLine,
}: HomeIconSecType) => {
  return (
    <div
      className={` w-[250px] h-[100px] ${bg_color} flex  gap-2 px-2 py-3
  `}
    >
      {Icon}
      <div>
        <b>{boldLine}</b>
        <p className=" max-w-lg   text-sm relative z-10"> {paraLine}</p>
      </div>
    </div>
  );
};

export default HomeIConSec;
