import AgentCard from "./AgentCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FindPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
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

            <div className="mt-[5em] flex items-center gap-5 justify-between flex-wrap">
              <AgentCard
                imgSrc="/img/icons/svgg.svg"
                heading="Verified listing"
                para="Find your perfect property hassle-free with our vetted listings. Every seller we represent is reputable, ensuring you can trust the details and make informed decisions confidently."
                service="Property"
                link="/search"
              />
              <AgentCard
                imgSrc="/img/aboutt1.png"
                heading="Transparent service"
                para="Enjoy open communication, clear processes, and honest assistance throughout your real estate journey. You will know exactly what to expect, no surprises."
                service="Service"
                link="/specialized_service"
              />
              <AgentCard
                imgSrc="/img/aboutt2.png"
                heading="Expert guidance"
                para="Let our experienced experts lead the way, providing you with personalized assistance tailored to your specific requirements, helping you effortlessly achieve your property goals."
                service="Agent"
                link="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPage;
