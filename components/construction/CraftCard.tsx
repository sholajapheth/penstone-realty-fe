import Image from "next/image";

type ConsProp = {
  imgSrc: string;
  heading: string;
  para: string;
} 
const PackageCard = ({imgSrc, heading, para} : ConsProp) => {
  return (
    <>
      <div>
        <div className="w-[100%] lg:w-[378px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[24px] flex flex-col gap-[18px]">
          <div>
            <h2 className="text-[24px] font-semibold text-[#0A0A0A] pb-[12px]">
              {heading}
            </h2>
            <p className="text-[17px] text-[#737373]">{para}</p>
          </div>
          <div>
            <Image
              quality={100}
              unoptimized={true}
              width={200}
              height={200}
              className="h-full w-full"
              src={imgSrc}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
