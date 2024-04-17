"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ServiceCard = ({ imgSource, title, tagline }: Info3Card) => (
  <div className="text-secondary lg:w-[70%] mt-8 px-[1em]">
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-6">
      <Image
        src={imgSource}
        height={60}
        width={60}
        alt="sell-with-confidence"
      />

      <div className="text-center lg:text-left">
        <p className="text-[24px] font-semibold text-[#00080B] mb-2">{title}</p>
        <p className="text-[#414141]">{tagline}</p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [activeNav, setActiveNav] = useState("1");
        const router = useRouter();

  return (
    <div className=" pb-[5em] lg:pb-[8em] mt-[4em] lg:mt-0 flex justify-center text-secondary">
      <div className="grid grid-col-1 lg:grid-cols-2 w-[90%] lg:w-[85%]">
        <div className="relative flex justify-center gap-10">
          <div className="bg-[url('/img/services.png')]  lg:ml-[5em] rounded-md lg:h-full bg-no-repeat h-[500px] w-[100%] lg:w-[90%]">
            <div className="w-[100%] lg:w-[85%]  absolute -bottom-[2%] flex items-center justify-center">
              <div className="rounded-2xl shadow-md  px-3 lg:px-6 p-4  bg-white ">
                <div className="relative">
                  <Image
                    src={"/img/icons/home-checked-circle-filled.png"}
                    height={50}
                    width={50}
                    alt="bg-circle"
                    className="absolute right-4 -top-9"
                  />
                  <div>
                    <p className="lg:text-[20px] text-[#00080B] font-semibold">
                      Construction Management
                    </p>
                    <p className="text-[14px] lg:text-[16px] text-[#414141]">
                      We manage your project with commitment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-md px-3 lg:px-6 p-4 flex gap-4 items-start absolute -left-2 lg:left-4  top-9 bg-white">
            <Image
              src={"/img/icons/bg-circle.png"}
              height={50}
              width={50}
              alt="bg-circle"
            />
            <div>
              <p className="lg:text-[20px] text-[#00080B] font-semibold">
                Pre-sale property valuations
              </p>
              <p className="text-[14px] lg:text-[16px] text-[#414141]">
                We showcase verified properties
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-9 pt-[100px] lg:pt-0">
          <div className="text-[26px] flex items-center justify-center lg:justify-start gap-6">
            <button
              onClick={() => setActiveNav("1")}
              className={`${
                activeNav === "1"
                  ? " border-b-4 border-primary text-primary font-semibold"
                  : "text-[#00080B]"
              } pb-2 text-[20px] lg:text-[26px]`}
            >
              For Developers
            </button>
            <span>|</span>
            <button
              onClick={() => setActiveNav("2")}
              className={`${
                activeNav === "2"
                  ? "pb-2 border-b-4 border-primary text-primary font-semibold"
                  : "text-[#00080B]"
              }  text-[20px] lg:text-[26px]`}
            >
              For Investors
            </button>
          </div>

          {activeNav === "1" ? (
            <div>
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
            </div>
          ) : (
            <div>
              <ServiceCard
                title="Outsource with ease"
                tagline="Outsource tasks, reduce workload and increase efficiency, allowing you focus on your core projects."
                imgSource="/img/icons/outsource-with-ease.png"
              />
              <ServiceCard
                title="Sell with confidence"
                tagline=" Receive best-in-class marketing support and guidance throughout your property selling or buying process."
                imgSource="/img/icons/sell-with-confidence.png"
              />
              <ServiceCard
                title="Enhance portfolio yield"
                tagline="Enhance your property portfolios for modern living through latest proptech integration."
                imgSource="/img/icons/enhance-portfolio-yeild.png"
              />
            </div>
          )}

          <button
            className="px-6 py-3 rounded-md lg:ml-6 w-full lg:w-fit bg-primary text-white font-bold mt-10"
            onClick={() => router.push("/about")}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
