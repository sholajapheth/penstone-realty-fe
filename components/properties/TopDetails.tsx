"use client";

import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BsCheck, BsSave } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { GrDocumentPdf } from "react-icons/gr";
import { useRouter } from "next/navigation";

const TopDetails = () => {
              const router = useRouter();

  return (
    <div className="bg-[#F5FCFF80] px-[1em] md:px-[3em] lg:px-[4em] xl:px-[6em] py-[2em] flex items-center ">
      <div className=" flex-1 flex flex-col gap-y-4">
        <button
          className="text-secondary font-bold flex items-center "
          onClick={() => router.push("/search")}
        >
          <BiChevronLeft size={30} />
          <p>Back to Search</p>
        </button>

        <p className="font-semibold text-[25px] md:text-[40px] ">
          Lakowe Lake Resort
        </p>
        <p className="text-[16px] md:text-[20px] font-semibold">
          Lakowe, Lekki Ajah exp. Ibeju, Lagos State
        </p>

        <div className="flex">
          <div className="rounded-2xl bg-[#13718A] px-4 py-1 gap-2 text-white flex items-center ">
            <p className="text-sm">Managed by Pentstone</p>
            <BsCheck color="white" size={25} />
          </div>
        </div>
      </div>

      <button
        className="px-[3em] py-3 text-white font-medium bg-secondary rounded-md md:flex items-center gap-x-4 hidden "
        onClick={() => router.push("/apply")}
      >
        <BsSave />
        <p>Apply</p>
      </button>
    </div>
  );
};

export default TopDetails;
