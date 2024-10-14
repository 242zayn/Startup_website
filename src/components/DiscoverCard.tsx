import { DCardType } from "@/types/types";
import Image from "next/image";
import React from "react";

const DiscoverCard = ({ icon, title, dis }: DCardType) => {
  return (
    <div className=" w-[300px]  bg-[#1F1D2C] px-3 py-4 ">
      <Image src={icon} alt="" width={50} height={50} />
      <h4 className=" font-bold font-Raleway py-2">{title}</h4>
      <p className="max-w-lg text-sm text-start relative z-10">{dis}</p>
    </div>
  );
};

export default DiscoverCard;
