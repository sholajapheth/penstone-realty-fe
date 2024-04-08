import PackageCard from "./PackageCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Packages = () => {
    return (
      <>
        <div className=" px-[1em] md:px-[5em]">
          <div className="bg-white flex  justify-center py-[5em] ">
            <div className="w-full">
              <div className="flex items-center lg:items-start justify-center lg:justify-between flex-col lg:flex-row gap-3 ">
                <p className="text-[#212226] font-semibold text-center lg:text-left text-[40px] ">
                  Featured Packages for building approval{" "}
                </p>

                <div className="flex gap-4">
                  <button className="rounded-md bg-primary p-2  ">
                    <BiChevronLeft color="white" size={30} />
                  </button>
                  <button className="rounded-md bg-gray-300 p-2 text-primary  ">
                    <BiChevronRight size={30} />
                  </button>
                </div>
              </div>

              <div className="mt-[5em] flex items-center gap-[32px] justify-between flex-wrap ">
                <PackageCard />
                <PackageCard />
                <PackageCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Packages;