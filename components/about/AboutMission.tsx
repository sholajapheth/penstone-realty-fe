import Image from "next/image";

const ABoutMission = () => {
    return (
      <>
        <div className="bg-[#E6ECEE] px-[1em] md:p-[5em]">
          <div className="pb-[80px]">
            <p className="text-[18px] text-[#737373] pb-[16px]">Our Mission</p>
            <p className="text-[48px] font-semibold text-[#A3A3A3]">
              <span className="text-[#0A0A0A]">
                Pentstone is your trusted strategic partner for all your
                property requirements, delivering well-planned and executed
                projects.
              </span>{" "}
              More than just a real estate company, we're committed to creating
              unparalleled solutions to maximize your property's potential and
              ensure your success in the Nigerian market.
            </p>
          </div>

          <div className="flex justify-between items-end gap-[40px] h-full">
            <div className="w-[50%] flex flex-col justify-between h-full">
              <div className="rounded-[14px] p-[24px] flex flex-col gap-[24px]">
                <div>
                  <Image
                    src="/img/icons/svgg.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-[24px] font-bold text-[#0A0A0A] pb-[12px]">
                    Our Promise
                  </h2>
                  <p className="text-[18px] text-[#737373]">
                    To help you navigate the complexities of the local real
                    estate market, enabling you focus on key aspects of their
                    businesses and lives.
                  </p>
                </div>
              </div>
              <div className="bg-white border-[1px] border-[#D9E2E6] rounded-[14px] p-[24px] flex flex-col gap-[24px]">
                <div>
                  <Image
                    src="/img/icons/svgg.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-[24px] font-bold text-[#0A0A0A] pb-[12px]">
                    COre Values
                  </h2>
                  <p className="text-[18px] text-[#737373]">
                    Find your perfect property hassle-free with our vetted
                    listings. Every seller we represent is reputable, ensuring
                    you can trust the details and make informed decisions
                    confidently.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <img
                src="/img/about1.png"
                alt="agent-img"
                className="group-hover:scale-110 pri-anim"
              />
            </div>
          </div>
        </div>

        <div className="px-[1em] md:p-[5em]">
          <div className="bg-primary py-[15px] px-[15px] relative rounded-[40px] flex justify-between items-center">
            <div className="w-[55%] text-center px-[58px]">
              <p className="font-bold text-[40px] text-white">
                A remote-first company
              </p>
              <p className="text-[20px] text-white pt-[18px]">
                Our people are our greatest asset in shaping the future of real
                estate! We welcome talent from anywhere, empowering individuals
                to join our dynamic team and leverage their unique strengths.
              </p>
              <p className="text-white text-[20px] pt-[25px]">
                Send your CV to{" "}
                <a
                  href="mailto:apply@pentstonerealty.com"
                  className="font-medium"
                >
                  apply@pentstonerealty.com
                </a>
              </p>
            </div>
            <div className="w-[45%]">
              <img src="/img/about2.png" alt="" />
            </div>
            <div className="absolute top-[59%] right-[20%]">
              <img src="/img/laptop.png" alt="" />
            </div>
          </div>
        </div>
      </>
    );
}
 
export default ABoutMission;