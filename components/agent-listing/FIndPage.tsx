import AgentCard from "./AgentCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FindPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%]">
        <div className="bg-white flex  justify-center py-[2em] lg:py-[4em]">
          <div className="w-full">
            <div className="flex items-center gap-[10px] lg:items-start justify-center lg:justify-between flex-col lg:flex-row ">
              <p className="text-[#212226] text-center lg:text-left font-semibold text-[40px] ">
                Your Nigerian real estate go-to partner
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

            <div className="mt-[5em] flex items-center gap-10 justify-center flex-wrap">
              <AgentCard />
              <AgentCard />
              <AgentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPage;
