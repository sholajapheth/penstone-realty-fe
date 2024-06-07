import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="py-[3em] lg:py-[6em] md:w-[85%] w-[90%] bg-white">
        <Image src={"/logo.svg"} alt="penstone-logo" height={90} width={150} />

        <div className="flex items-start justify-between md:justify-start flex-wrap gap-[32px] md:gap-[100px] text-secondary mt-[2em] md:mt-[4em]">
          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Market Types
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Residential
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Commercial
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Hospitality
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Development Land
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Services and Solutions
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Remodel my Apartment
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Sell your property
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Manage my Construction project
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Invest in Real Estate
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit ">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Corporate
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              About Pentstone
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Get in touch
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Insight & Updates
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Policies
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Follow us
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Instagram
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">Youtube</p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Facebook
            </p>
          </div>
        </div>

        <div className="bg-[#414141] h-[1px] w-full my-[32px] lg:hidden"></div>

        <p className="mt-[2em] md:mt-[4em] text-center lg:text-left">
          © Pentstone Realty 2024
        </p>

        <div className="flex lg:hidden justify-center items-center gap-[40px] pt-[20px]">
          <Image src={"/img/facebook-f 1.png"} alt="" height={24} width={24} />
          <Image src={"/img/instagram 1.png"} alt="" height={24} width={24} />
          <Image src={"/img/twitter 1.png"} alt="" height={24} width={24} />
          <Image src={"/img/linkedin 1.png"} alt="" height={24} width={24} />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 lg:hidden">
        <Image src={"/img/footIcon.png"} alt="" height={24} width={24} />
      </div>
    </div>
  );
};

export default Footer;
