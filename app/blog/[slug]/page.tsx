"use client";

import { BlogCard } from "@/components/blog";
import { NewsLetter } from "@/components/common";
import Image from "next/image";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CgChevronRight } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Page = () => {
            const router = useRouter();

  return (
    <div>
      <div className="bg-[#F5FCFF80] px-[1em] lg:px-[14em] py-[2em] lg:py-[6em]">
        <p className="text-secondary lg:leading-[120%] text-[30px] lg:text-[70px] font-semibold w-full lg:w-[70%]">
          How to attract buyers and close deals
        </p>
      </div>

      <div className="px-[1em] pt-[2em] pb-[1.5em] lg:px-[18em]">
        <div className="flex items-end justify-between ">
          <div className="flex items-center gap-4">
            <Image
              src={"/img/sample-avatar.png"}
              height={55}
              width={55}
              alt="blog-author"
              className="rounded-full"
            />

            <div>
              <p className="font-bold text-secondary">Tope Akinmegha</p>
              <p className=" text-[#7E8492] pt-2">Registered ESV</p>
            </div>
          </div>
          <p className=" text-[#7E8492]">10 min read May 20, 2023</p>
        </div>
        <div className="mt-[2em]">
          <Image
            src={"/img/blog-img.png"}
            height={200}
            width={200}
            alt="blog-author"
            className="w-full h-full"
          />

          <div className="pt-[40px] lg:pt-[80px]">
            <p className="text-[18px] lg:text-[24px] text-[#1D1E25]">
              In the dynamic world of real estate, success hinges on the ability
              to understand and cater to the needs of buyers. Whether
              you&apos;re a seasoned agent or a homeowner looking to sell,
              adopting a customer-centric approach is key to attracting buyers
              and closing deals effectively. In this guide, we&apos;ll{" "}
              <span className="font-bold">
                explore three essential steps to help you navigate the real
                estate market with confidence and achieve your selling
                objectives.
              </span>
            </p>
          </div>

          <div className="mt-10 md:flex justify-start items-start gap-[48px] ">
            <Image
              src={"/img/sample-avatar.png"}
              width={300}
              height={300}
              alt="author"
              className="h-[100px] w-[100px] lg:w-[200px] lg:h-[200px]"
            />

            <div className="flex flex-col justify-between">
              <div className="inline md:flex gap-4 items-center">
                <div className="flex flex-row  items-center gap-6 mt-8 md:mt-4 ">
                  <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                    <FaFacebookF className="md:text-2xl text-[#1E2A58]" />
                  </button>
                  <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                    <FaTwitter className="md:text-2xl text-[#1E2A58] " />
                  </button>

                  <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                    <FaInstagram className="md:text-2xl text-[#1E2A58]" />
                  </button>
                  <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                    <FaLinkedinIn className="md:text-2xl text-[#1E2A58]" />
                  </button>
                </div>
                <p className="mt-4">Share this article</p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <p>Written by</p>
                <p
                  className="text-[32px] font-bold text-secondary cursor-pointer"
                  onClick={() => router.push("/listing")}
                >
                  Tope Akinmegha
                </p>
                <p className="font-medium text-[#7E8492]">Registered ESV</p>

                <p className="w-full text-[18px] leading-[2em]">
                  Skilled in React Native, iOS and backend, Toni has a
                  demonstrated knowledge of the information technology and
                  services industry, with plenty of hands-on experience to back
                  it up.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-[3em] lg:mt-[5em]">
          <div></div>

          <div className="w-full lg:w-[30%]">
            <p className="font-semibold text-[#9EA3AE] flex items-center gap-2 text-[18px]">
              Next Post <CgChevronRight className="font-bold" size={25} />
            </p>
            <p className="font-semibold text-[#282828] text-[20px] mt-2">
              The Benefits of Working with a Real Estate Agent
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white flex  justify-center my-[2em] lg:my-[3em]">
        <div className="w-[85%]">
          <div className="flex items-center justify-between my-8">
            <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
              Related Posts
            </p>
            <div className="lg:flex gap-4 hidden">
              <button className="rounded-md bg-primary p-2  ">
                <BiChevronLeft color="white" size={30} />
              </button>
              <button className="rounded-md bg-gray-200 p-2 text-primary  ">
                <BiChevronRight size={30} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <BlogCard key={item} />
            ))}
          </div>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Page;
