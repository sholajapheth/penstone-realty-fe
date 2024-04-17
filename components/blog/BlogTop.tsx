"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const BlogTop = () => {
      const router = useRouter();

  return (
    <div className="bg-white flex  justify-center pb-[8em]">
      <div className="w-[90%] lg:w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-6 pt-[1em] md:pt-[4em] lg:gap-[80px]">
          <div className="col-span-3 mb-8 flex flex-col items-start justify-between h-full">
            <div>
              <div className="flex items-center gap-2">
                <div className="rounded-2xl px-[14px] py-[7px] bg-[#D5F3FF] text-secondary text-xs font-medium">
                  <p>BLOG</p>
                </div>
                <p className="text-[#737373] text-sm">January 29, 2023</p>
              </div>
              <p className="text-[25px] lg:leading-[120%] md:text-[50px] font-semibold mt-2 ">
                Closing Deals: A Customer-Centric Guide to Real Estate Success
              </p>
            </div>
            <p className="text-[#737373] mt-[16px] text-[18px] lg:text-[20px] leading-[150%] w-[90%]">
              Explore three essential steps to help you navigate the real estate
              market with confidence and achieve your selling objectives.
              Unleash your kitchen&apos;s potential with captivating decoration that
              will elevate your space, from sparkling gold accents to cozy
              textures...
            </p>
            <button
              className="p-4 py-3 mt-[40px] border border-primary rounded-xl font-medium text-primary w-full md:w-auto"
              onClick={() => router.push("/blog/1")}
            >
              Read More
            </button>
          </div>
          {/* <div className="hidden md:inline-block"></div> */}

          <div
            className="col-span-3 cursor-pointer w-full h-full"
            onClick={() => router.push("/blog/1")}
          >
            <Image
              src={"/img/blog-top.png"}
              objectFit="cover"
              width={150}
              height={150}
              className="w-full h-full"
              alt="blog-top-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
