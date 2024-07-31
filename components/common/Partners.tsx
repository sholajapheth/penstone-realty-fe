// import PartnerCard from "./PartnerCard";
import Image from "next/image";

type PartnerProp = {
  imgSrc: string;
  heading: string;
  para: string;
}

const Partners = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
          {" "}
          <div className="bg-white flex justify-center py-[4em] ">
            <div className="w-full">
              <p className="text-[#212226] font-semibold text-[36px] lg:text-[48px] text-center w-full">
                Your trusted real estate go-to partner
              </p>

              <div className="mt-[4em] flex items-center gap-10 justify-center flex-wrap ">
                <PartnerCard
                  imgSrc="/img/partner3.png"
                  heading="Transparent Communication"
                  para="We prioritize clear, honest dialogue to build trust and foster strong relationships with you, ensuring peace of mind throughout the process."
                />
                <PartnerCard
                  imgSrc="/img/partner2.png"
                  heading="Dedicated Support"
                  para="Count on personalized assistance from our experienced professionals, who are committed to meeting your unique needs with care and attention."
                />
                <PartnerCard
                  imgSrc="/img/partner1.png"
                  heading="Proven Track Record"
                  para="With a history of delivering results and satisfied clients, we've earned a reputation for excellence and reliability you can trust."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;

export const PartnerCard = ({imgSrc, heading, para}: PartnerProp) => {
  return (
    <>
      <div>
        <div className="w-[100%] lg:w-[370px] border-[1px] shadow-shad shadow-sm border-[#E5E5E5] rounded-[14px] p-[20px] flex flex-col gap-[18px]">
          <div>
            <Image
              quality={100}
              unoptimized={true}
              width={300}
              height={200}
              className="w-full h-full"
              src={imgSrc}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[24px] font-semibold text-[#0A0A0A] pb-[12px] text-center whitespace-nowrap">
              {heading}
            </h2>
            <p className="text-[17px] text-[#737373] text-center">{para}</p>
          </div>
        </div>
      </div>
    </>
  );
};
