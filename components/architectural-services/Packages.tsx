import PackageCard from "./PackageCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Packages = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[85%]">
          <div className="bg-white flex justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
            <div className="w-full">
              <div className="flex items-center lg:items-start justify-center lg:justify-between flex-col lg:flex-row gap-3 ">
                <p className="text-[#212226] font-semibold text-center lg:text-left text-[32px] lg:text-[40px] ">
                  Featured Packages <br className="lg:hidden" /> for building
                  approval{" "}
                </p>

                <div className="hidden lg:flex gap-4">
                  <button className="rounded-md bg-primary p-2  ">
                    <BiChevronLeft color="white" size={30} />
                  </button>
                  <button className="rounded-md bg-gray-300 p-2 text-primary  ">
                    <BiChevronRight size={30} />
                  </button>
                </div>
              </div>

              <div className="mt-[4em] flex items-center gap-[20px] justify-center lg:justify-between flex-wrap ">
                <PackageCard />
                <PackageCard />
                <PackageCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
