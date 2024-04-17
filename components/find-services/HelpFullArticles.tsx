import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BlogCard } from "../blog";

const HelpFullArticles = () => {
  return (
    <div className="bg-white flex  justify-center mb-10">
      <div className="w-[90%] lg:w-[85%]">
        <div className="flex items-center justify-between mb-8 ">
          <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
            Helpful Articles
          </p>
          <div className="hidden lg:flex gap-4">
            <button className="rounded-md bg-primary p-2  ">
              <BiChevronLeft color="white" size={30} />
            </button>
            <button className="rounded-md bg-gray-200 p-2 text-primary  ">
              <BiChevronRight size={30} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-10 justify-center flex-wrap">
          {[1, 2, 3].map((item) => (
            <BlogCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpFullArticles;
