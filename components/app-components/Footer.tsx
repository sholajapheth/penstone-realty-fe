import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-[1em] md-py-[3em] lg:py-[6em] md:w-[85%] w-[90%] bg-white">
        <Image src={"/logo.png"} alt="penstone-logo" height={90} width={150} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8 text-secondary mt-[2em] md:mt-[4em]">
          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-semibold ">Market Types</p>
            <p className="text-[18px]">Residential</p>
            <p className="text-[18px]">Commercial</p>
            <p className="text-[18px]">Hospitality</p>
            <p className="text-[18px]">Development Land</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-semibold ">Services and Solutions</p>
            <p className="text-[18px]">Remodel my Apartment</p>
            <p className="text-[18px]">Sell your property</p>
            <p className="text-[18px]">Manage my Construction project</p>
            <p className="text-[18px]">Invest in Real Estate</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-[20px] font-semibold ">Corporate</p>
            <p className="text-[18px]">About Pentstone</p>
            <p className="text-[18px]">Get in touch</p>
            <p className="text-[18px]">Insight & Updates</p>
            <p className="text-[18px]">Policies</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-semibold ">Follow us</p>
            <p className="text-[18px]">Instagram</p>
            <p className="text-[18px]">Youtube</p>
            <p className="text-[18px]">Facebook</p>
          </div>
        </div>

        <p className="mt-[2em] md:mt-[4em]">© Pentstone Realty 2024</p>
      </div>
    </div>
  );
};

export default Footer;
