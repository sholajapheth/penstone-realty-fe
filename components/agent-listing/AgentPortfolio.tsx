import ListingCard from "./ListingCard";

const AgentPortfolio = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[85%]">
        <div className="bg-white  flex justify-center py-[2em] lg:py-[4em] ">
          <div className="w-full">
            <div className="flex items-center lg:items-start justify-center  lg:justify-between ">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Property Portfolio{" "}
              </p>
            </div>

            <div className="mt-[3em] w-full flex items-center gap-[20px] justify-center lg:justify-between flex-wrap">
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
    </div>
  );
};

export default AgentPortfolio;
