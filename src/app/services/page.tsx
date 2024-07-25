import OurServ from "@/components/OurServ";
import React from "react";

const OurServices = () => {
  return (
    <div className="w-full h-full py-16 px-4 md:px-12 xl:px-16 2xl:px-20 ">
      <div className="w-full h-full py-16 px-4 md:px-12 xl:px-16 2xl:px-20">
        <h1 className="text-center text-2xl md:text-4xl text-gray-700 py-6 border-b border-[#d2ee7f]">
          Our <span className="text-[#d2ee7f] font-semibold">Services</span>
        </h1>
        <OurServ />
      </div>
    </div>
  );
};

export default OurServices;
