"use client";
import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = ({ imgSource, title, tagline }: Info3Card) => (
  <div className="text-secondary lg:w-[60%] mt-8">
    <div className="flex items-start gap-6">
      <Image
        src={imgSource}
        height={60}
        width={60}
        alt="sell-with-confidence"
      />

      <div>
        <p className="text-[24px] mb-2">{title}</p>
        <p>{tagline}</p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [activeNav, setActiveNav] = useState("1");
  return (
    <div className=" py-[4em] flex  justify-center text-secondary">
      <div className="grid grid-col-1 lg:grid-cols-2 w-[90%]">
        <div className="relative hidden lg:block">
          <div className="bg-[url('/img/services.png')]  ml-[5em] rounded-md h-full bg-no-repeat w-[80%]">
            <div className=" w-[80%]  absolute -bottom-10 flex items-center justify-center">
              <div className="rounded-2xl shadow-md px-6 p-4  bg-white ">
                <div className="relative">
                  <Image
                    src={"/img/icons/home-checked-circle-filled.png"}
                    height={50}
                    width={50}
                    alt="bg-circle"
                    className="absolute right-4 -top-9"
                  />
                  <div>
                    <p className="text-[20px] font-semibold">
                      Construction Management
                    </p>
                    <p>We manage your project with commitment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-md px-6 p-4 flex gap-4 items-start absolute top-9 bg-white">
            <Image
              src={"/img/icons/bg-circle.png"}
              height={50}
              width={50}
              alt="bg-circle"
            />
            <div>
              <p className="text-[20px] font-semibold">
                Pre-sale property valuations
              </p>
              <p>We showcase verified properties</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[26px] flex items-center gap-6">
            <button className="pb-2 border-b-4 border-primary text-primary font-semibold">
              For Developers
            </button>
            <span>|</span>
            <button className="">For Investors</button>
          </div>

          <ServiceCard
            title="Sell with confidence"
            tagline=" Receive best-in-class marketing support and guidance throughout your property selling or buying process."
            imgSource="/img/icons/sell-with-confidence.png"
          />
          <ServiceCard
            title="Outsource with ease"
            tagline="Outsource tasks, reduce workload and increase efficiency, allowing you focus on your core projects."
            imgSource="/img/icons/outsource-with-ease.png"
          />
          <ServiceCard
            title="Enhance portfolio yield"
            tagline="Enhance your property portfolios for modern living through latest proptech integration."
            imgSource="/img/icons/enhance-portfolio-yeild.png"
          />

          <button className="px-6 py-3 rounded-md bg-primary text-white font-bold mt-10">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
