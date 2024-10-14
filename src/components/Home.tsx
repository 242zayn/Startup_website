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
import {
  ceo1,
  MapImage,
  MegentaCircle,
  Person3,
  PlayIcon,
  StartIcon,
} from "@/images/image";
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
      <div className="w-[90%] m-auto py-[50px]  ">
        <h4 className="uppercase text-blue w-full   "> Testimonials</h4>
        <div className="flex justify-between items-center">
          <h3 className=" w-1/4 text-5xl  font-Radley py-6 font-medium ">
            What Customers Say About Us
          </h3>
          <ButtonTheem
            content="View More"
            bg_color="bg-megentabold"
            border=""
            border_color=""
          />
        </div>
        <div className="flex flex-wrap gap-3 pt-[100px]  ">
          <div className=" w-[32%] bg-[url('/custumer1.png')] h-[270px] relative  ">
            <Image
              src={PlayIcon}
              alt=""
              height={80}
              width={80}
              className=" top-[40%] right-[40%] absolute"
            />
          </div>
          <div className=" w-[33%] bg-[#1F1D2C] py-12 px-6">
            <div className="flex items-center gap-1 ">
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
            </div>
            <p className="text-neutral-500 max-w-lg  my-5 text-sm text-start relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              consectetur adipiscing commodo euismod condimentum nunc.
            </p>
            <div className="flex items-center gap-3">
              <Image src={ceo1} alt="" height={50} width={50} />
              <div>
                <h4 className=" font-Raleway font-bold ">Sarvesh Sharma</h4>
                <p className=" font-light text-xs text-blue ">Company CEO</p>
              </div>
            </div>
          </div>
          <div className=" w-[33%] bg-[#1F1D2C] py-12 px-6 ">
            <div className="flex items-center gap-1 ">
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
              <Image src={StartIcon} alt="" height={20} width={20} />
            </div>
            <p className="text-neutral-500 max-w-lg  my-5 text-sm text-start relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              consectetur adipiscing commodo euismod condimentum nunc.
            </p>
            <div className="flex items-center gap-3">
              <Image src={ceo1} alt="" height={50} width={50} />
              <div>
                <h4 className=" font-Raleway font-bold ">Sarvesh Sharma</h4>
                <p className=" font-light text-xs text-blue ">Company CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lets Start */}
      <div className="bg-[#1F1D2C]">
        <div className="flex w-[90%] m-auto py-[50px]  ">
          <div className=" w-1/2 py-[100px] ">
            <h4 className="uppercase text-blue w-full "> GET STARTED</h4>
            <h3 className=" w-[80%] text-5xl  font-Radley py-6 font-medium ">
              Let&apos;s Start Here! New Space for World
            </h3>
            <p className="text-[#9B9B9B] max-w-lg  my-5 text-sm text-start relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              consectetur adipiscing commodo euismod condimentum nunc.
            </p>
            <div className="flex py-5 gap-5 ">
              <ButtonTheem
                content="Get Started"
                bg_color="bg-megentabold"
                border=""
                border_color=""
              />
              <ButtonTheem
                content="Hosting Plans"
                bg_color=" "
                border="border"
                border_color="border-white"
              />
            </div>
          </div>
          <div className="w-1/2 relative  ">
            <div className=" w-[500px] h-[450px] ml-auto bg-[#181420] relative overflow-hidden py-[30px] px-4 ">
              <Image
                src={MegentaCircle}
                alt=""
                height={450}
                width={450}
                className=" absolute top-[25%] -right-[15%]   "
              />

              <div className="flex flex-col">
                <h4 className=" text-megentalight text-lg ml-[100px] !m-0 flex  items-center">
                  <RightIcon />{" "}
                  <span className="text-sm">Unlimited BandWidth</span>
                </h4>
                <h4 className=" text-megentalight text-lg ml-[100px] !m-0 flex  items-center">
                  <RightIcon />{" "}
                  <span className="text-sm">Super Turbo Power</span>
                </h4>
                <h4 className=" text-megentalight text-lg ml-[100px] !m-0 flex  items-center">
                  <RightIcon />{" "}
                  <span className="text-sm">
                    24*7 Full Support More Detials
                  </span>
                </h4>
              </div>
            </div>
            <Image
              src={Person3}
              alt=""
              height={450}
              width={400}
              className=" absolute -top-[4%] -right-[4%] z-20  "
            />
          </div>
        </div>
      </div>

      {/* Subcribe Section */}
      <div className="w-[90%] m-auto my-[100px] pt-[30px] pb-[80px] rounded-xl bg-megentalight text-center Subscribe overflow-hidden  ">
        <h4 className="uppercase text-black w-full font-bold text-sm ">
          {" "}
          GET STARTED
        </h4>
        <h3 className=" w-[80%] m-auto text-center text-5xl  font-Radley py-6 font-medium ">
          Subscribe to our Newsletter
        </h3>
        <div className="flex items-center gap-4 justify-center ">
          <input className="bg-white outline-none w-1/2 h-[55px] text-black px-4 " />
          <ButtonTheem
            content="Subscribe"
            bg_color="bg-black"
            border=""
            border_color=""
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
