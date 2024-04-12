"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PackageCard = () => {
    const router = useRouter();

  return (
    <>
      <div>
        <div className="w-[100%] lg:w-[370px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[20px] flex flex-col gap-[18px]">
          <div>
            <h2 className="text-[24px] font-semibold text-[#0A0A0A] pb-[12px]">
              Tenant Verification
            </h2>
            <p className="text-[17px] text-[#737373]">
              Trust our meticulous screening to secure reliable tenants,
              ensuring long-term occupancy with trustworthy individuals and
              minimizing risks for your property investment.
            </p>
          </div>
          <div>
            <Image
              width={300}
              height={200}
              className="w-full h-full"
              src="/img/tenant.png"
              alt=""
            />
          </div>

          <div className="flex justify-start items-center gap-[10px]">
            <button
              className="text-primary font-semibold py-3 rounded-xl"
              onClick={() => router.push("/request_form")}
            >
              Start a request
            </button>
            <Image width={20} height={20} src="/img/arrow-right.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
