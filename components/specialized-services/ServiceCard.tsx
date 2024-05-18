"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type ServiceProp = {
  imgSrc: string;
  heading: string;
  para: string;
}

const PackageCard = ({ imgSrc, para, heading }: ServiceProp) => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="w-[100%] lg:w-[378px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[24px] flex flex-col gap-[18px]">
          <div>
            <h2 className="text-[24px] font-semibold text-[#0A0A0A] pb-[12px]">
              {heading}
            </h2>
            <p className="text-[17px] text-[#737373]">
              {para}
            </p>
          </div>
          <div>
            <Image
              width={300}
              height={200}
              className="w-full h-full"
              src={imgSrc}
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
