const PartnerCard = () => {
    return (
      <>
        <div>
          <div className="w-[375px] border-[1px] shadow-[#809FAB] shadow-sm border-[#D9E2E6] rounded-[14px] p-[24px] flex flex-col items-center gap-[24px]">
            <div>
              <img src="/img/partner.png" alt="" />
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
}
 
export default PartnerCard;