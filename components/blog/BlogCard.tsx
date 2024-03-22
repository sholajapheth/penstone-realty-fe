import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="p-4 group hover:shadow-md rounded-xl transition-all ease-in duration-300">
      <div>
        <div className="overflow-hidden rounded-xl ">
          <Image
            src={"/img/blog-card.png"}
            alt="penstone-logo"
            height={90}
            width={150}
            className="w-full  aspect-auto  group-hover:scale-110 transition-all duration-300 ease-out"
          />
        </div>
        <div className="text-sm flex items-center justify-between mt-2">
          <p className="text-gray-300">October 12, 2024</p>

          <div className="bg-[#F9F9F9] px-2 py-1 rounded-md">E-BOOK</div>
        </div>

        <p className="font-bold mt-2">
          The Benefits of Working with a Real Estate Agent
        </p>

        <div className="flex items-center mt-4 gap-4">
          <div className="overflow-hidden rounded-xl w-[3em] h-[3em] ">
            <Image
              src={"/img/blog-author.png"}
              alt="penstone-logo"
              height={90}
              width={150}
              className="w-full  group-hover:scale-110 transition-all duration-300 ease-out"
            />
          </div>

          <p className="font-bold text-sm">Gabriel Valdivia</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
