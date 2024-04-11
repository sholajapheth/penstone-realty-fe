import ListingCard from "./ListingCard";

const AgentPortfolio = () => {
    return (
      <div className=" px-[1em] md:px-[5em]">
        <div className="bg-white  flex justify-center py-[2em] lg:py-[4em] ">
          <div className="w-full">
            <div className="flex items-center lg:items-start justify-center  lg:justify-between ">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Property Portfolio{" "}
              </p>
            </div>

            <div className="mt-[4em] w-full flex items-center gap-[32px] justify-center lg:justify-between flex-wrap">
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default AgentPortfolio;