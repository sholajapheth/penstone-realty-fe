import Image from "next/image";

const TopSection = () => {
  return (
    <>
      <div className="mt-[36px] mb-[24px] mx-[36px] border-[#D9E2E6] border-[2px] rounded-[8px] p-6 flex justify-evenly items-center">
        <div className="flex justify-center items-start gap-4 text-[#000929]">
          <Image src="/img/first.png" width={40} height={40} alt="" />
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[16px] font-medium leading-[150%]">
              Total Revenue
            </p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[32px] font-semibold leading-[125%]">
                $14,437
              </p>
              <p className="text-[#27AE60] bg-greenBg py-[6px] px-[10px] rounded-[12px]">
                +$235
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-start gap-4 text-[#000929]">
        <div className="bg-[#D9E2E6] h-[64px] w-[1.5px] mx-2"></div>
          <Image src="/img/second.png" width={40} height={40} alt="" />
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[16px] font-medium leading-[150%]">Invoices</p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[32px] font-semibold leading-[125%]">1,915</p>
              <p className="text-[#27AE60] bg-greenBg py-[6px] px-[10px] rounded-[12px]">
                +20
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-start gap-4 text-[#000929]">
        <div className="bg-[#D9E2E6] h-[64px] w-[1.5px] mx-2"></div>
          <Image src="/img/third.png" width={40} height={40} alt="" />
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[16px] font-medium leading-[150%]">Tenants</p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[32px] font-semibold leading-[125%]">178</p>
              <p className="text-[#27AE60] bg-greenBg py-[6px] px-[10px] rounded-[12px]">
                +235
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-start gap-4 text-[#000929]">
        <div className="bg-[#D9E2E6] h-[64px] w-[1.5px] mx-2"></div>
          <Image src="/img/forth.png" width={40} height={40} alt="" />
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[16px] font-medium leading-[150%]">
              On-time payment
            </p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[32px] font-semibold leading-[125%]">90%</p>
              <p className="text-[#F06565] bg-[#FDF7F7] py-[6px] px-[10px] rounded-[12px]">
                -3%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
