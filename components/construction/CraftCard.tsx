import Image from "next/image";

const PackageCard = () => {
  return (
    <>
      <div>
        <div className="w-[100%] lg:w-[378px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[24px] flex flex-col gap-[18px]">
          <div>
            <h2 className="text-[24px] font-semibold text-[#0A0A0A] pb-[12px]">
              Quantity Surveyors
            </h2>
            <p className="text-[17px] text-[#737373]">
              Trust our meticulous screening to secure reliable tenants,
              ensuring long-term occupancy with trustworthy individuals and
              minimizing risks for your property investment.
            </p>
          </div>
          <div>
            <Image
              width={20}
              height={20}
              className="h-full w-full"
              src="/img/craft.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
