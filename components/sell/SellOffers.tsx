import SellCard from "./SellCard";

const SellOffers = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
        {" "}
        <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
          {" "}
          <div className="w-full">
            <p className="text-[#212226] font-semibold text-[40px] text-center lg:text-left w-full">
              What we offer
            </p>

            <div className="mt-[3em] w-full flex items-center gap-5 justify-between flex-wrap">
              <SellCard
                icon="/img/Frame1.png"
                heading={"Strategic Marketing"}
                para="Our targeted campaigns ensure your property stands out, attracting the right buyers and maximizing exposure for successful sales."
              />
              <SellCard
                icon="/img/Frame2.png"
                heading={"Price Negotiation"}
                para="Trust our experts to secure the best deals, optimizing property value and ensuring favourable terms for your peace of mind."
              />
              <SellCard
                icon="/img/Frame3.png"
                heading={"Expert Valuation"}
                para="Benefit from precise assessments, providing invaluable insights for informed decisions and maximizing your return on investment."
              />
              <SellCard
                icon="/img/Frame4.png"
                heading={"Professional Photography"}
                para="Elevate your property's appeal with captivating visuals, showcasing its unique features and enhancing perceived value to potential buyers."
              />
              <SellCard
                icon="/img/Frame5.png"
                heading={"Marketing Plan"}
                para="Tailored strategies highlight your property's best aspects, driving interest and increasing visibility to attract qualified buyers effectively."
              />
              <SellCard
                icon="/img/Frame6.png"
                heading={"Comprehensive Services"}
                para="From start to finish, our assistance ensures smooth transactions, client satisfaction, and successful property transactions every step of the way."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellOffers;
