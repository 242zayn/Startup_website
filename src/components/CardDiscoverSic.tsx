import React from "react";
import DiscoverCard from "./DiscoverCard";
import { DiscoverData } from "@/data/data";

const CardDiscover = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {DiscoverData.map((data, index) => {
        return (
          <DiscoverCard
            key={index}
            icon={data.icon}
            dis={data.dis}
            title={data.title}
          />
        );
      })}
    </div>
  );
};

export default CardDiscover;
