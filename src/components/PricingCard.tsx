"use client";
import { PricingCardType } from "@/types/types";
import React from "react";

interface Props {
  data: PricingCardType;
}

const PricingCard: React.FC<Props> = ({ data }) => {
  return (
    <div className=" w-[300px] h-[550px] bg-white rounded-md p-4 flex flex-col flex-wrap justify-between ">
      <div>
        <h3 className="text-black text-xl font-extrabold ">Hatchlin Plan</h3>
        <h4 className=" text-blue text-lg font-Raleway font-medium ">
          NOW {data.off}% OFF!
        </h4>
      </div>
      <div className=" pb-10">
        {/* <p className="text-[#5C5C5C] font-medium text-sm py-2 ">
          Single Website
        </p> */}
        {data.detils.map((value, index) => {
          return (
            <div
              key={index}
              className="text-[#5C5C5C] font-medium text-sm py-2 "
            >
              <p className="text-[#5C5C5C] font-medium text-sm  ">{value}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h4 className="text-black font-bold font-xm">Intoductory offer</h4>
        <h3 className=" text-blue text-lg font-Raleway font-medium ">
          $2.75/mo*
        </h3>
        <div className="text-center pt-3">
          <button className="bg-blue text-white py-3 px-6 text-xs font-bold rounded-md hover:bg-blue">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
