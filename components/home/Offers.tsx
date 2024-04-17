"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Offers = () => {
      const router = useRouter();

  return (
    <div className=" bg-secondary  text-white text-center py-16">
      <div className="w-full flex  items-center justify-center">
        <div className="w-[90%] lg:w-[85%]">
          <p className="text-[30px] lg:text-[40px] leading-[140%] font-semibold ">
            Simplifying real estate <br className='hidden lg:block' /> journey for{" "}
            <span className="text-[#0D90C4]">Developers</span>, <br className='hidden lg:block' />
            <span className="text-[#0D90C4]">Investors</span> and{" "}
            <span className="text-[#0D90C4]">Occupants</span>.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-6 mt-10 ">
            <div className="rounded-md  bg-white/50 p-6 lg:p-3 flex items-start text-start gap-4 flex-col lg:flex-row">
              <Image
                src={"/img/icons/lines-outline-bag.png"}
                height={50}
                width={50}
                alt="lines-outline-bag"
              />
              <div>
                <p className="font-bold text-[24px] mb-3 ">
                  Work with professionals{" "}
                </p>
                <p>
                  We bring years of experience and industry knowledge to every
                  project, ensuring project excellence in every detail.
                </p>
              </div>
            </div>
            <div className="rounded-md  bg-white p-6 lg:p-3 flex items-start text-start gap-4 flex-col lg:flex-row">
              <Image
                src={"/img/icons/team-light.png"}
                height={50}
                width={50}
                alt="lines-outline-bag"
              />
              <div>
                <p className="font-bold text-[24px] text-secondary mb-3 ">
                  Extend your team{" "}
                </p>
                <p className="text-[#414141]">
                  Think of us as an extension of your own team, aligning with
                  your vision and achieving your goals, every step of the way.
                </p>
              </div>
            </div>
            <div className="rounded-md  bg-[#0D90C4] p-6 lg:p-3 flex items-start text-start gap-4 flex-col lg:flex-row">
              <Image
                src={"/img/icons/lines-outline-bag.png"}
                height={50}
                width={50}
                alt="like-light-bag"
              />
              <div>
                <p className="font-bold text-[24px]  mb-3">
                  Your reliable partner{" "}
                </p>
                <p>
                  We prioritize transparency, communication, and results,
                  ensuring smooth and successful collaboration from start to
                  finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-white  my-14 w-full " />
      <div className="flex items-center justify-center mt-4">
        <div className="flex  flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[40px]">7.4%</p>
            <p className="text-white font-medium">Property Return Rate</p>
          </div>
          <div className="w-[64px] h-[1px] bg-white lg:hidden"></div>
          <div className="flex flex-col gap-3 items-center lg:border-l-2  lg:border-r-2 px-[4em] lg:border-spacing-2 lg:border-white">
            <p className="font-bold text-[40px]">356</p>
            <p className="text-white font-medium">Property in Sell & Rent</p>
          </div>
          <div className="w-[64px] h-[1px] bg-white lg:hidden"></div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[40px]">₦125M</p>
            <p className="text-white font-medium">Median Property price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
