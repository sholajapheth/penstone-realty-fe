import Image from "next/image";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className=" w-full flex items-center justify-center  py-6 bg-white">
      <div className="w-[90%] justify-between flex items-center ">
        <Image src={"/logo.png"} alt="penstone-logo" height={90} width={150} />

        <div className="text-[16px] flex items-center gap-8">
          <button className="flex items-center gap-4">
            <span>For Developers</span>
            <IoChevronDownOutline />
          </button>

          <button className="flex items-center gap-4">
            <span>For Investors</span>
            <IoChevronDownOutline />
          </button>

          <button className="flex items-center gap-4">
            <span>Find Property</span>
          </button>

          <button className="flex items-center gap-4">
            <span>Blog</span>
          </button>
        </div>

        <div className="flex gap-4 ">
          <button>
            <span>Agent Log in</span>
          </button>
          <button className="px-4 py-2 text-white font-bold hover:scale-95 ease-in-out transition-all duration-300 rounded-md bg-primary">
            <span>Get in touch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
