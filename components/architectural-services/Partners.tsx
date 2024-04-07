import PartnerCard from "./PartnerCard";

const Partners = () => {
    return (
      <>
        <div className=" px-[1em] md:px-[5em]">
          <div className="bg-white flex  justify-center py-[5em] ">
            <div className="w-full">
              <div className="flex items-start justify-between  ">
                <p className="text-[#212226] font-semibold text-[40px] ">
                  Featured Packages for building approval{" "}
                </p>
              </div>

              <div className="mt-[5em] flex items-center gap-[32px] justify-between flex-wrap ">
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