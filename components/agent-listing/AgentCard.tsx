"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type AboutProp = {
  imgSrc: string;
  heading: string;
  para: string;
  service: string;
  link: string;
};
const AgentCard = ({ imgSrc, para, heading, service, link }: AboutProp) => {
  const router = useRouter();

  return (
    <div>
      <div className="w-[100%] lg:w-[378px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[24px] flex flex-col gap-[18px]">
        <div>
          <Image src={imgSrc} width={40} height={40} alt="" />
        </div>
        <div>
          <h2 className="text-[24px] font-bold text-[#0A0A0A] pb-[12px]">
            {heading}
          </h2>
          <p className="text-[18px] leading-[150%] text-[#737373]">{para}</p>
        </div>
        <div
          className="flex justify-start items-center gap-[7px] cursor-pointer"
          onClick={() => router.push(`${link}`)}
        >
          <p className="font-medium text-primary">Find a {service}</p>
          <Image
            src="/img/icons/arrow-right.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
