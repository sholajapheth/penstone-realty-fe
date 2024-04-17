import React from "react";
import BlogCard from "./BlogCard";

const BlogBody = () => {
  return (
    <div className="bg-white flex  justify-center">
      <div className="w-[90%] lg:w-[85%] mb-[4em]">
        <div className="flex items-center justify-center my-4">
          <div className="flex gap-4 items-center flex-wrap text-xs font-semibold">
            <button className="px-3 py-2 rounded-xl text-primary bg-[#FFD7E0]">
              All Post
            </button>
            <button>Webminar</button>
            <button>Leisure</button>
            <button>Blog</button>
            <button>E-Book</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
