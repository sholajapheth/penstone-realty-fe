import Image from "next/image";
import React from "react";

const BlogTop = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-2xl p-2 bg-[#D5F3FF] text-secondary text-xs font-semibold">
              <p>BLOG</p>
            </div>
            <p className="text-gray-400 text-sm">January 29, 2023</p>
          </div>

          <p className="text-[25px] md:text-[50px] font-semibold ">
            Closing Deals: A Customer-Centric Guide to Real Estate Success
          </p>

          <p className="text-gray-400">
            Explore three essential steps to help you navigate the real estate
            market with confidence and achieve your selling objectives.
          </p>
          <button className="p-4 border border-primary rounded-xl font-medium text-primary">
            Read More
          </button>
        </div>

        <div>
          <Image
            src={"/img/blog-top.png"}
            objectFit="cover"
            width={200}
            height={200}
            alt="blog-top-img"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
