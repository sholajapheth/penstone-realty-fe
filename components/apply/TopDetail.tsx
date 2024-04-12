
import React from "react";
import { useRouter } from "next/navigation";

const TopDetail = () => {
  return (
    <div className="bg-[#F5FCFF80] px-[1em] md:px-[3em] lg:px-[4em] xl:px-[6em] py-[2em] flex items-center text-secondary ">
      <div className=" flex-1 flex flex-col gap-y-4">
        <p className="font-semibold text-[25px] md:text-[40px] ">Apply</p>
        <p className="text-[16px] md:text-[20px] font-semibold">
          We are happy you&apos;re interested. <br />
          Complete an application below to get started.
        </p>
      </div>
    </div>
  );
};

export default TopDetail;
