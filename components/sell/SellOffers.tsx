import SellCard from "./SellCard";

const SellOffers = () => {
  return (
    <div className=" px-[1em] md:px-[5em]">
      <div className="bg-white  flex justify-center py-[4em] ">
        <div className="w-full">
          <div className="flex items-start justify-between  ">
            <p className="text-[#212226] font-semibold text-[40px] ">
              What we offer
            </p>
          </div>

          <div className="mt-[2em] lg:mt-[4em] w-full flex items-center gap-[32px] justify-between flex-wrap">
            <SellCard />
            <SellCard />
            <SellCard />
            <SellCard />
            <SellCard />
            <SellCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SellOffers;
