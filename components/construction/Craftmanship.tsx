import CraftCard from "./CraftCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Packages = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
          <div className="bg-white flex justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
            <div className="w-full">
              <div className="flex items-center lg:items-start justify-center lg:justify-between flex-col lg:flex-row gap-3 ">
                <p className="text-[#212226] font-semibold text-center lg:text-left text-[32px] lg:text-[40px] ">
                  Featured Craftsmanship{" "}
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

              <div className="mt-[3em] flex items-start gap-5 justify-between flex-wrap ">
                <CraftCard
                  imgSrc="/img/cons1.png"
                  heading="Quantity Surveyors"
                  para="Trust our meticulous screening to secure reliable tenants, ensuring long-term occupancy with trustworthy individuals and minimizing risks for your property investment."
                />
                <CraftCard
                  imgSrc="/img/cons2.png"
                  heading="Carpenters"
                  para="Let us handle property hassles, from rent collection to maintenance coordination, ensuring smooth operations and maximizing your investment's potential"
                />
                <CraftCard
                  imgSrc="/img/cons3.png"
                  heading="Interior Decorators"
                  para="Count on us to find lucrative property deals, leveraging our expertise and network to maximize returns aligned with your investment goals."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
