import React from "react";
import Image from "next/image";
import Wi_fi_icon from "@/images/Wi_fi_icon";
import HomeIConSec from "./HomeIConSec";
import ButtonTheem from "./ButtonTheem";
import CardDiscover from "./CardDiscoverSic";
import SkyLineCard from "./SkyLineCard";
import { PriceCardData, SkyLineData } from "@/data/data";
import RightIcon from "@/images/RightIcon";
import PricingCard from "./PricingCard";
import { MapImage } from "@/images/image";
const TurestedData = [
  "/client_2.png",
  "/client_4.png",
  "/client_5.png",
  "/client_6.png",
  "/client_9.png",
];

const Home = () => {
  return (
    <div className=" pt-[80px] w-full rounded-md bg-neutral-950 relative flex flex-col  antialiased">
      <div className=" max-w-[90%] flex m-auto ">
        <div className="w-1/2 text-start ">
          <p className=" uppercase text-blue ">Welcome to host beta</p>
          <h1 className=" text-6xl font-Radley py-6 font-medium w-[64%]">
            Smart Company with Perfect Web Space
          </h1>
          <p className="text-neutral-500 max-w-lg  my-5 text-sm text-start relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur adipiscing commodo euismod condimentum nunc.
          </p>
        </div>
        <div className="w-1/2  m-auto relative -top-10 z-10   ">
          <Image
            src={"/Image1.png"}
            className=" m-auto  "
            width={500}
            height={500}
            alt=""
          />
          <div className=" absolute w-[500px] flex items-end -bottom-10 right-0  ">
            <HomeIConSec
              Icon={<Wi_fi_icon />}
              boldLine={"Primium SSL"}
              paraLine={" Lorem ipsum dolor sit amet, consectetur fdfd"}
              bg_color={"bg-megentalight"}
            />
            <div>
              <HomeIConSec
                Icon={<Wi_fi_icon />}
                boldLine={"Primium SSL"}
                paraLine={" Lorem ipsum dolor sit amet, consectetur fdfd"}
                bg_color={"bg-megentabold"}
              />
              <HomeIConSec
                Icon={<Wi_fi_icon />}
                boldLine={"Primium SSL"}
                paraLine={" Lorem ipsum dolor sit amet, consectetur fdfd"}
                bg_color={"bg-megentabold"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Turested Sec */}
      <div className="w-full py-[100px] m-auto bg-[#1F1D2C] ">
        <h2 className=" text-2xl text-center">
          Trusted by 2500+ Company Wordwide
        </h2>
        <div className="flex items-center justify-center gap-[30px]">
          {TurestedData.map((value, index) => {
            return (
              <div key={index} className=" py-[50px]  ">
                <Image src={value} height={150} alt={value} width={150} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Person Section */}
      <div className=" max-w-[90%] flex py-[50px] m-auto ">
        <div className="w-1/2  relative  z-10   ">
          <Image
            src={"/person2.png"}
            className="  "
            width={450}
            height={450}
            alt=""
          />
        </div>
        <div className="w-1/2 text-start pt-[50px] pl-16 ">
          <p className=" uppercase text-blue ">About Host Beta</p>
          <h1 className=" text-6xl font-Radley py-6 font-medium ">
            The Perfect Digital Connection
          </h1>
          <p className="text-neutral-500 max-w-lg  my-5 text-sm text-start relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur adipiscing commodo euismod condimentum nunc.
          </p>
          <div className="flex  pt-[50px] ">
            <h4 className=" text-megentalight text-lg ">Faster Process</h4>
            <h4 className=" text-megentalight text-lg ml-[100px] ">
              Faster Develiry
            </h4>
          </div>
          <div className="flex  pt-[100px] ">
            <h4 className=" text-megentalight text-lg ">Faster Access</h4>
            <h4 className=" text-megentalight text-lg ml-[100px]  ">
              24/7 Support
            </h4>
          </div>
          <div className=" pt-24">
            <ButtonTheem
              border=""
              content="Discover More"
              border_color="bg-megentabold"
              bg_color="bg-megentabold"
            />
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div className=" max-w-[80%] m-auto  py-[50px] text-center">
        <p className=" uppercase text-blue text-center ">Our Services</p>
        <h1 className=" text-6xl font-Radley py-6 font-medium w-[80%] m-auto ">
          Discover Luxury in Web Hosting
        </h1>
        <div>
          <CardDiscover />
        </div>
      </div>

      {/* Skyline Section */}
      <div className=" max-w-[90%] m-auto flex py-[100px] ">
        <div className=" w-1/3  relative  z-10 flex gap-2 flex-col   ">
          {SkyLineData.map((data, index) => {
            return (
              <div key={index} className=" ">
                <SkyLineCard icon={data.icon} title={data.title} />
              </div>
            );
          })}
        </div>
        <div className=" w-[63%] text-start pt-[30px] pl-16 ">
          <p className=" uppercase text-blue ">Our Capabilites</p>
          <h1 className=" text-5xl font-Radley py-6 font-medium ">
            From Skyline to the Shoreline We Are There
          </h1>
          <p className="text-neutral-500 max-w-lg  text-sm text-start relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur adipiscing commodo euismod condimentum nunc.
          </p>
          <div className="flex  pt-[20px] ">
            <h4 className=" text-megentalight text-lg ml-[100px] !m-0 flex items-center">
              <RightIcon /> <span> Faster Process</span>
            </h4>
            <h4 className=" text-megentalight text-lg ml-[100px] flex items-center">
              <RightIcon /> <span> Faster Develiry</span>
            </h4>
          </div>
          <div className="flex  pt-[30px] ">
            <h4 className=" text-megentalight text-lg !m-0 ml-[100px] flex items-center">
              <RightIcon /> <span> Faster Access</span>
            </h4>
            <h4 className=" text-megentalight text-lg ml-[100px] flex items-center">
              <RightIcon /> <span>24*7 Support</span>
            </h4>
          </div>
          <div className=" pt-24">
            <ButtonTheem
              border=""
              content="Discover More"
              border_color="bg-megentabold"
              bg_color="bg-megentabold"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className=" max-w-[90%] m-auto  py-[50px] ">
        <p className=" uppercase text-blue text-center ">Pricing Plan</p>
        <h3 className=" text-6xl font-Radley py-6 font-medium m-auto ">
          Hosting with Freedom Built-In
        </h3>
        <div className="flex gap-3">
          {PriceCardData.map((data, index) => {
            return (
              <div key={index}>
                <PricingCard data={data} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Luxries Section */}
      <div className="max-w-[90%] m-auto py-[50px]">
        <p className=" uppercase text-blue text-center ">SERVERS WORLDWIDE</p>
        <h3 className=" text-5xl w-3/4 font-Radley py-6 font-medium text-center m-auto ">
          Luxurious, Grand, Spacious, Always Uptime
        </h3>
        <Image
          src={MapImage}
          alt=""
          width={800}
          height={800}
          className="py-[50px]"
        />
      </div>

      {/* Customer Section */}
      <div className="max-w-[90%] bg-red-600 m-auto py-[50px]  ">
        <h4 className="uppercase text-blue w-full "> Testimonials</h4>
      </div>
    </div>
  );
};

export default Home;
