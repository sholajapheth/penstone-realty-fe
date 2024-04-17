import { PaginationNav } from "../common";
import ServiceCard from "./ServiceCard";

const SpecializedServices = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[85%]">
          <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
            <div className="w-full">
              <div className="flex items-start justify-between  ">
                <p className="text-[#212226] font-semibold text-[40px] ">
                  Select a Service{" "}
                </p>
              </div>

              <div className="my-[3em] flex items-center gap-10 justify-center flex-wrap ">
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
      </div>
    </>
  );
};

export default SpecializedServices;
