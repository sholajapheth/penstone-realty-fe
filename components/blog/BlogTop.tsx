import Image from "next/image";
import React from "react";

const BlogTop = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 p-[1em] md:p-[4em] lg:p-[6em] pt-[1em] md:pt-[4em]">
        <div className="col-span-3 mb-8">
          <div className="flex items-center gap-2">
            <div className="rounded-2xl p-2 bg-[#D5F3FF] text-secondary text-xs font-semibold">
              <p>BLOG</p>
            </div>
            <p className="text-gray-400 text-sm">January 29, 2023</p>
          </div>

          <p className="text-[25px] md:text-[50px] font-semibold mt-2 ">
            Closing Deals: A Customer-Centric Guide to Real Estate Success
          </p>

          <p className="text-gray-400">
            Explore three essential steps to help you navigate the real estate
            market with confidence and achieve your selling objectives.
          </p>
          <button className="p-4 py-3 mt-4 border border-primary rounded-xl font-medium text-primary w-full md:w-auto">
            Read More
          </button>
        </div>
        <div className="hidden md:inline-block"></div>

        <div className="col-span-2">
          <Image
            src={"/img/blog-top.png"}
            objectFit="cover"
            width={200}
            height={200}
            className="w-full "
            alt="blog-top-img"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
