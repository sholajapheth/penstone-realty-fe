"use client"
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

    const handleNavigation = (filter: string) => {
      const query = new URLSearchParams({ filter }).toString();
      router.push(`/search?${query}`);
    };
  return (
    <div className="flex items-center justify-center">
      <div className="py-[3em] lg:py-[6em] md:w-[85%] w-[90%] max-w-[1200px] bg-white">
        <Image
          quality={100}
          unoptimized={true}
          src={"/logo.svg"}
          alt="penstone-logo"
          height={90}
          width={150}
        />

        <div className="flex items-start justify-between md:justify-start flex-wrap gap-[32px] md:gap-[100px] text-secondary mt-[2em] md:mt-[4em]">
          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Market Types
            </p>
            <p
              className="text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer"
              onClick={() => handleNavigation("RESIDENTIAL")}
            >
              Residential
            </p>
            <p
              className="text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer"
              onClick={() => handleNavigation("COMMERCIAL")}
            >
              Commercial
            </p>
            <p
              className="text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer"
              onClick={() => handleNavigation("HOSPITALITY")}
            >
              Hospitality
            </p>
            <p
              className="text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer"
              onClick={() => handleNavigation("DEVELOPMENT_LAND")}
            >
              Development Land
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Services and Solutions
            </p>
            <Link
              href={"/construction"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Remodel my Apartment
            </Link>
            <Link
              href={"/sell"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Sell your property
            </Link>
            <Link
              href={"/contact_us"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Live chat with experts{" "}
            </Link>
            <Link
              href={"/find_services"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Invest in Real Estate
            </Link>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit ">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Corporate
            </p>
            <Link
              href={"/about"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              About Pentstone
            </Link>
            <Link
              href={"/contact_us"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Get in touch
            </Link>
            <Link
              href={"/blog"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Insight & Updates
            </Link>
            <Link
              href={"/policies"}
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Policies
            </Link>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-[45%] md:w-fit">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold ">
              Follow us
            </p>
            <Link
              href={"https://www.instagram.com/pentstonerealty/"}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Instagram
            </Link>
            <Link
              href={"https://www.linkedin.com/company/pentstonerealty"}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              LinkedIn
            </Link>
            <Link
              href={"https://youtube.com/@pentstonerealty?si=6hxBF5i3YPuhPLjf"}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Youtube
            </Link>
            <Link
              href={"https://www.facebook.com/pentstonerealty/"}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] md:text-[16px] lg:text-[18px]"
            >
              Facebook
            </Link>
          </div>
        </div>

        <div className="bg-[#414141] h-[1px] w-full my-[32px] lg:hidden"></div>

        <p className="mt-[2em] md:mt-[4em] text-center lg:text-left">
          © Pentstone Realty 2024
        </p>

        <div className="flex lg:hidden justify-center items-center gap-[40px] pt-[20px]">
          <Image
            quality={100}
            unoptimized={true}
            src={"/img/facebook-f 1.png"}
            alt=""
            height={24}
            width={24}
          />
          <Image
            quality={100}
            unoptimized={true}
            src={"/img/instagram 1.png"}
            alt=""
            height={24}
            width={24}
          />
          <Image
            quality={100}
            unoptimized={true}
            src={"/img/twitter 1.png"}
            alt=""
            height={24}
            width={24}
          />
          <Image
            quality={100}
            unoptimized={true}
            src={"/img/linkedin 1.png"}
            alt=""
            height={24}
            width={24}
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 lg:hidden">
        <Image
          quality={100}
          unoptimized={true}
          src={"/img/footIcon.png"}
          alt=""
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};

const FooterWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Footer />
  </Suspense>
);

export default FooterWrapper;
