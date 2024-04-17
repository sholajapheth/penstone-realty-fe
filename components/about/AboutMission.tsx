import Image from "next/image";

const ABoutMission = () => {
    return (
      <>
        <div className="flex justify-center bg-[#FAFAFA]  -mb-[30px]">
          <div className="w-[90%] lg:w-[85%]">
            <div className="py-[4em] lg:pt-[8em] lg:pb-[8em]">
              <div className="pb-[70px]">
                <p className="text-[18px] text-[#737373] pb-[16px]">
                  Our Mission
                </p>
                <p className="text-[32px] lg:text-[46px] font-semibold text-[#A3A3A3]">
                  <span className="text-[#0A0A0A]">
                    Pentstone is your trusted strategic partner for all your
                    property requirements, delivering well-planned and executed
                    projects.
                  </span>{" "}
                  More than just a real estate company, we&apos;re committed to
                  creating unparalleled solutions to maximize your
                  property&apos;s potential and ensure your success in the
                  Nigerian market.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between items-end gap-[40px] h-full">
                <div className="lg:w-[50%] flex flex-col justify-between h-full">
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
                      <p className="text-[18px] text-[#737373] pb-[40px]">
                        To help you navigate the complexities of the local real
                        estate market, enabling you focus on key aspects of
                        their businesses and lives.
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
                        Core Values
                      </h2>
                      <p className="text-[18px] text-[#737373]">
                        Pentstone is founded on core values of{" "}
                        <span className="font-bold">
                          Commitment, Adaptability, Reliability, Empowerment,
                          and Strategic Excellence (CARES)
                        </span>
                        , ensuring clients&apos; success through transparent
                        services and expert guidance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[50%]">
                  <Image
                    src="/img/about1.png"
                    alt="agent-img"
                    width={400}
                    height={400}
                    className="group-hover:scale-110 pri-anim w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-white">
          <div className="w-[85%]">
            <div className="pb-[5em]">
              <div className="bg-primary py-[15px] px-[15px] relative rounded-[40px] flex flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-0">
                <div className="lg:w-[55%] text-center lg:px-[58px]">
                  <p className="font-bold text-[40px] text-white">
                    A remote-first company
                  </p>
                  <p className="lg:text-[20px] text-white pt-[18px]">
                    Our people are our greatest asset in shaping the future of
                    real estate! We welcome talent from anywhere, empowering
                    individuals to join our dynamic team and leverage their
                    unique strengths.
                  </p>
                  <p className="text-white lg:text-[20px] pt-[25px]">
                    Send your CV to{" "}
                    <a
                      href="mailto:apply@pentstonerealty.com"
                      className="font-medium"
                    >
                      apply@pentstonerealty.com
                    </a>
                  </p>
                </div>
                <div className="w-[100%] lg:w-[45%]">
                  <Image
                    src="/img/about2.png"
                    className="w-full h-full"
                    height={420}
                    width={420}
                    alt=""
                  />
                </div>
                <div className="absolute hidden lg:block lg:top-[59%] lg:right-[20%]">
                  <Image
                    src="/img/laptop.png"
                    className="w-[350px] h-full"
                    width={700}
                    height={700}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default ABoutMission;