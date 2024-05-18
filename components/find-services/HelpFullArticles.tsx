import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BlogCard } from "../blog";

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
];


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
        <div className="flex items-start gap-10 justify-center flex-wrap">
          {articles.map((item, i) => (
            <BlogCard key={i} imgSrc={item.imgSrc} date={item.date} title={item.title}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpFullArticles;
