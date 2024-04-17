
import React from "react";

const TopDetail = () => {
  return (
    <div className="bg-[#F5FCFF80] flex  justify-center ">
      <div className="w-[90%] lg:w-[85%]">
        <div className=" py-[2em] flex items-center text-secondary ">
          <div className=" flex-1 flex flex-col gap-y-4">
            <p className="font-semibold text-[25px] md:text-[40px] ">Apply</p>
            <p className="text-[16px] md:text-[20px]">
              We are happy you&apos;re interested. <br />
              Complete an application below to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDetail;
