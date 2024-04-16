// import PartnerCard from "./PartnerCard";
import Image from "next/image";

const Partners = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[85%]">
          {" "}
          <div className="bg-white flex  justify-center py-[4em] ">
            <div className="w-full">
              <p className="text-[#212226] font-semibold text-[36px] lg:text-[48px] text-center w-full">
                Your trusted real estate go-to partner
              </p>

              <div className="mt-[4em] flex items-center gap-[20px] justify-between flex-wrap ">
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;

export const PartnerCard = () => {
  return (
    <>
      <div>
        <div className="w-[100%] lg:w-[370px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[20px] flex flex-col gap-[18px]">
          <div>
            <Image
              width={300}
              height={200}
              className="w-full h-full"
              src="/img/partner.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[24px] font-semibold text-[#0A0A0A] pb-[12px] text-center">
              Structural Drawings
            </h2>
            <p className="text-[17px] text-[#737373] text-center">
              Trust our meticulous screening to secure reliable tenants,
              ensuring long-term occupancy with trustworthy individuals and
              minimizing risks for your property investment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
