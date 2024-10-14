import Home from "@/components/Home";
import Nav from "@/components/Nav";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

const page = () => {
  return (
    <div className=" w-full  ">
      <Nav />
      <Home />

      <BackgroundBeams />
    </div>
  );
};

export default page;
