import Image from "next/image";

type ProProp = {
  imgSrc: string;
  heading: string;
  para: string;
};

const ProjectCard = ({imgSrc, heading, para} : ProProp) => {
  return (
    <div>
      <div className="w-[100%] lg:w-[378px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[24px] flex flex-col gap-[18px]">
        <div>
          <Image
            quality={100}
            unoptimized={true}
            src={imgSrc}
            width={40}
            height={40}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-[24px] font-bold text-[#0A0A0A] pb-[12px]">
            {heading}
          </h2>
          <p className="text-[18px] text-[#737373]">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
