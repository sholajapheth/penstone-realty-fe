"use client";

import React, { useState } from "react";
import BlogCard from "./BlogCard";

const articles = [
  {
    date: "October 12, 2024 | 10 mins read",
    title: "The Benefits of Working with a Real Estate Agent",
    imgSrc: "/img/art1.png",
  },
  {
    date: "October 12, 2024",
    title:
      "Running API and BrowserChecks Using Terraform, AWS, and Cloudhub Private Locations",
    imgSrc: "/img/art4.png",
  },
  {
    date: "October 12, 2024",
    title: "House Viewing Tips for Buyers and Sellers",
    imgSrc: "/img/art5.png",
  },
  {
    date: "October 12, 2024 | 10 mins read",
    title: "The Benefits of Working with a Real Estate Agent",
    imgSrc: "/img/art2.png",
  },
  {
    date: "October 12, 2024",
    title:
      "Running API and BrowserChecks Using Terraform, AWS, and Cloudhub Private Locations",
    imgSrc: "/img/art8.png",
  },
  {
    date: "October 12, 2024",
    title: "House Viewing Tips for Buyers and Sellers",
    imgSrc: "/img/art6.png",
  },
  {
    date: "October 12, 2024 | 10 mins read",
    title: "The Benefits of Working with a Real Estate Agent",
    imgSrc: "/img/art5.png",
  },
  {
    date: "October 12, 2024",
    title:
      "Running API and BrowserChecks Using Terraform, AWS, and Cloudhub Private Locations",
    imgSrc: "/img/art7.png",
  },
  {
    date: "October 12, 2024",
    title: "House Viewing Tips for Buyers and Sellers",
    imgSrc: "/img/art4.png",
  },
];

const BlogBody = () => {
  const [activeBar, setActiveBar] = useState("1");
  return (
    <div className="bg-white flex  justify-center">
      <div className="w-[90%] lg:w-[85%] mb-[4em]">
        <div className="flex items-center justify-center my-4">
          <div className="flex gap-4 items-center flex-wrap text-[16px] font-semibold">
            <button
              onClick={() => setActiveBar("1")}
              className={`${
                activeBar === "1"
                  ? "px-4 py-2 rounded-full text-primary bg-[#FFD7E0]"
                  : ""
              } `}
            >
              All Post
            </button>
            <button onClick={() => setActiveBar("2")} className={`${
                activeBar === "2"
                  ? "px-4 py-2 rounded-full text-primary bg-[#FFD7E0]"
                  : ""
              } `}>Webminar</button>
            <button onClick={() => setActiveBar("3")} className={`${
                activeBar === "3"
                  ? "px-4 py-2 rounded-full text-primary bg-[#FFD7E0]"
                  : ""
              } `}>Leisure</button>
            <button onClick={() => setActiveBar("4")} className={`${
                activeBar === "4"
                  ? "px-4 py-2 rounded-full text-primary bg-[#FFD7E0]"
                  : ""
              } `}>Blog</button>
            <button onClick={() => setActiveBar("5")} className={`${
                activeBar === "5"
                  ? "px-4 py-2 rounded-full text-primary bg-[#FFD7E0]"
                  : ""
              } `}>E-Book</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((item, i) => (
            <BlogCard
              key={i}
              imgSrc={item.imgSrc}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
