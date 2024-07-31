"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const ArchitecturePageBanner = () => {
  const router = useRouter();

  return (
    <>
      <div className="text-white ">
        <div className="bg-secondary relative p-4 py-[3em] md:pt-[6em] md:pb-[8em] col-span-2 flex items-center justify-center text-center">
          <div>
            <button className=" px-8 rounded-full text-white ">
              <p className="bg-[#13718A]  px-4 py-1 rounded-full text-[14px] font-medium">
                Top Rated
              </p>
            </button>
            <p className="text-[30px] md:text-[68px] font-bold pb-2  lg:pb-0 leading-[120%]">
              Affordable expert <br className="hidden md:inline-block" />
              architectural services
            </p>
            <p className="text-[16px] lg:text-[18px] pt-[10px]">
              We provide developers and homeowners with smart, buildable, and
              cost-effective
              <br className="hidden md:inline-block" /> architectural design for
              planning permission and building regulations approval.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-[15px]">
              <button
                className="bg-primary px-3 lg:px-8  font-semibold py-3 rounded-xl text-white mt-8"
                onClick={() => {
                  Cookies.set("request", "ARCHITECTURAL_DESIGN");
                  router.push("/request_form");
                }}
              >
                Get Started
              </button>
              <button className="border border-white px-3 lg:px-8  font-semibold py-3 rounded-xl text-white lg:mt-8 flex justify-center items-center gap-[8px]">
                Download Service Guide
                <Image
                  quality={100}
                  unoptimized={true}
                  width={20}
                  height={20}
                  src="/img/arw.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchitecturePageBanner;
