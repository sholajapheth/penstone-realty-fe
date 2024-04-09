
const PackageCard = () => {
  return (
    <>
      <div>
        <div className="w-[375px] border-[1px] shadow-[#809FAB] shadow-sm border-[#D9E2E6] rounded-[14px] p-[24px] flex flex-col gap-[24px]">
          <div>
            <h2 className="text-[24px] font-semibold text-[#0A0A0A] pb-[12px]">
              Structural Drawings
            </h2>
            <p className="text-[17px] text-[#737373]">
              Trust our meticulous screening to secure reliable tenants,
              ensuring long-term occupancy with trustworthy individuals and
              minimizing risks for your property investment.
            </p>
          </div>
          <div>
            <img src="/img/package.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
