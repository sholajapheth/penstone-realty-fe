import { PaginationNav } from "../common";
import ServiceCard from "./ServiceCard";

const SpecializedServices = () => {
  return (
    <>
      <div className=" px-[1em] md:px-[5em]">
        <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
          <div className="w-full">
            <div className="flex items-start justify-between  ">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Select a Service{" "}
              </p>
            </div>

            <div className="mt-[4em] flex items-center gap-[32px] justify-between flex-wrap ">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
            <PaginationNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedServices;
