import SellCard from "./SellCard";

const SellOffers = () => {
  return (
      <div className="flex justify-center">
        <div className="w-[85%]">      <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
        {" "}
        <div className="w-full">
            <p className="text-[#212226] font-semibold text-[40px] text-center lg:text-left w-full">
              What we offer
            </p>

          <div className="mt-[3em] w-full flex items-center gap-[20px] justify-between flex-wrap">
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
    </div>
  );
};

export default SellOffers;
