// import PartnerCard from "./PartnerCard";
import Image from "next/image";

const Partners = () => {
    return (
      <>
        <div className=" px-[1em] md:px-[5em]">
          <div className="bg-white flex  justify-center py-[4em] ">
            <div className="w-full">
              <div className="flex items-center justify-center  ">
                <p className="text-[#212226] font-semibold text-[40px] ">
                  Your trusted real estate go-to partner
                </p>
              </div>

              <div className="mt-[4em] flex items-center gap-[32px] justify-between flex-wrap ">
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Partners;

export const PartnerCard = () => {
  return (
    <>
      <div>
        <div className="w-[375px] border-[1px] shadow-[#809FAB] shadow-sm border-[#D9E2E6] rounded-[14px] p-[24px] flex flex-col items-center gap-[24px]">
          <div>
            <Image width={300} height={200} className='w-full h-full' src="/img/partner.png" alt="" />
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