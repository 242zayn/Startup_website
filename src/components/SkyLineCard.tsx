import { SkyLineType } from "@/types/types";
import Image from "next/image";
import React from "react";

const SkyLineCard = ({ icon, title }: SkyLineType) => {
  return (
    <div className="flex items-center gap-5 bg-[#1F1D2C] py-10 pl-4 ">
      <Image src={icon} alt="" height={50} width={50} />
      <h2>{title}</h2>
    </div>
  );
};

export default SkyLineCard;
