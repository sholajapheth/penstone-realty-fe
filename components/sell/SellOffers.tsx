import SellCard from "./SellCard";

const SellOffers = () => {
  return (
    <div className=" px-[1em] md:px-[5em]">
      <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
        {" "}
        <div className="w-full">
            <p className="text-[#212226] font-semibold text-[40px] text-center lg:text-left w-full">
              What we offer
            </p>

          <div className="mt-[4em] w-full flex items-center gap-[32px] justify-between flex-wrap">
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
