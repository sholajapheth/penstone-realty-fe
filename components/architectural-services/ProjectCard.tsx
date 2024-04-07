import Image from "next/image";

const ProjectCard = () => {
  return (
    <div>
      <div className="w-[375px] border-[1px] shadow-[#809FAB] shadow-sm border-[#D9E2E6] rounded-[14px] p-[24px] flex flex-col gap-[24px]">
        <div>
          <Image src="/img/icons/svgg.svg" width={40} height={40} alt="" />
        </div>
        <div>
          <h2 className="text-[24px] font-bold text-[#0A0A0A] pb-[12px]">
            Verified listings
          </h2>
          <p className="text-[18px] text-[#737373]">
            Find your perfect property hassle-free with our vetted listings.
            Every seller we represent is reputable, ensuring you can trust the
            details and make informed decisions confidently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;