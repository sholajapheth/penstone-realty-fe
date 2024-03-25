import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const PaginationNav = () => {
  return (
    <div className="flex items-center justify-center mt-[1em] md:mt-[4em]">
      <div className="font-bold flex items-center gap-4 ">
        <BiChevronLeft size={28} />

        <div className="p-4 py-[0.55rem] bg-primary rounded-full text-white shadow-sm ">
          1
        </div>
        <div className="p-4 py-[0.55rem] bg-white rounded-full text-secondary shadow-sm ">
          2
        </div>
        <div className="p-4 py-[0.55rem] bg-white rounded-full text-secondary shadow-sm ">
          3
        </div>
        <span>...</span>
        <div className="p-4 py-[0.55rem] bg-white rounded-full text-secondary shadow-sm ">
          3
        </div>
        <BiChevronRight size={28} />
      </div>
    </div>
  );
};

export default PaginationNav;
