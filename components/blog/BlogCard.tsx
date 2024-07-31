"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type ArtProp = {
  imgSrc: string;
  date: string;
  title: string;
};
const BlogCard = ({imgSrc, date, title} : ArtProp) => {
      const router = useRouter();

  return (
    <div
      className="p-3 w-[100%] lg:w-[378px] group hover:shadow-md rounded-xl transition-all ease-in duration-300 cursor-pointer"
      onClick={() => router.push("/blog/1")}
    >
      <div>
        <div className="overflow-hidden rounded-xl ">
          <Image
            quality={100}
            unoptimized={true}
            src={imgSrc}
            alt="penstone-logo"
            height={200}
            width={200}
            className="w-full h-full aspect-auto  group-hover:scale-110 transition-all duration-300 ease-out"
          />
        </div>
        <div className="text-sm flex items-center justify-between mt-2">
          <p className="text-gray-300">{date}</p>

          <div className="bg-[#F9F9F9] px-2 py-1 rounded-md">E-BOOK</div>
        </div>

        <p className="font-bold mt-2">{title}</p>

        <div className="flex items-center mt-4 gap-4">
          <div className="overflow-hidden rounded-xl w-[3em] h-[3em] ">
            <Image
              quality={100}
              unoptimized={true}
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
