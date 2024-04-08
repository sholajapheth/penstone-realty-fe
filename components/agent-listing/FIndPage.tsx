import AgentCard from "./AgentCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FindPage = () => {
    return (
      <div className=" px-[1em] md:px-[5em]">
        <div className="bg-white flex  justify-center py-[5em] ">
          <div className="w-full">
            <div className="flex items-center gap-[10px] lg:items-start justify-center lg:justify-between flex-col lg:flex-row ">
              <p className="text-[#212226] text-center lg:text-left font-semibold text-[40px] ">
                Your Nigerian real estate go-to partner
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

            <div className="mt-[5em] flex items-center gap-[20px] justify-between flex-wrap">
              <AgentCard />
              <AgentCard />
              <AgentCard />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default FindPage;