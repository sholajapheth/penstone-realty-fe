import Image from "next/image";

const SellCard = () => {
  return (
    <div>
      <div className="w-[100%] lg:w-[370px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[20px] flex flex-col gap-[18px]">
        <div>
          <Image src="/img/icons/svgg.svg" width={40} height={40} alt="" />
        </div>
        <div>
          <h2 className="text-[24px] font-bold text-[#0A0A0A] pb-[12px]">
            Strategic Marketing
          </h2>
          <p className="text-[18px] text-[#737373]">
            Our targeted campaigns ensure your property stands out, attracting
            the right buyers and maximizing exposure for successful sales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellCard;
