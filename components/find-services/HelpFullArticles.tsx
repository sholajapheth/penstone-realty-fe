import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BlogCard } from "../blog";

const HelpFullArticles = () => {
  return (
    <div className="mb-4 md:mb-8 mt-[5em] p-[0.5em] md:p-[6em] ">
      <div className="flex items-center justify-between my-8 ">
        <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
          Helpful Articles
        </p>
        <div className="flex gap-4">
          <button className="rounded-md bg-primary p-2  ">
            <BiChevronLeft color="white" size={30} />
          </button>
          <button className="rounded-md bg-gray-200 p-2 text-primary  ">
            <BiChevronRight size={30} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-between  flex-wrap">
        {[1, 2, 3].map((item) => (
          <BlogCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default HelpFullArticles;
