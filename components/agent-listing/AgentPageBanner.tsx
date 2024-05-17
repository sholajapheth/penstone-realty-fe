"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AgentPageBanner = () => {
    const router = useRouter();

  return (
    <div className="text-secondary">
      <div className="flex justify-center bg-[#F5FCFF] w-full mb-[40px]">
        <div
          className="w-[90%] lg:w-[85%] cursor-pointer"
          onClick={() => router.push(`/contact_us`)}
        >
          <div className="flex justify-start gap-2 items-center w-full py-[20px] lg:py-[36px] ">
            <Image src="/img/icons/Icon.svg" width={20} height={20} alt="" />
            <p className="font-semibold text-[18px]  text-secondary">
              Back to Agent
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[85%]">
          <div className="flex justify-between flex-col lg:flex-row items-start gap-[25px] pb-[20px]">
            <div className="flex flex-col gap-[40px] lg:w-[50%] py-[24px]">
              <div className="flex justify-between w-full lg:justify-start items-center gap-[24px]">
                <div className="relative">
                  <Image
                    src="/img/agent_1.png"
                    alt="agent-img"
                    height={170}
                    width={170}
                    className="group-hover:scale-110 pri-anim"
                  />
                  <Image
                    src="/img/icons/Auto Layout Horizontal.svg"
                    alt="agent-img"
                    height={30}
                    width={30}
                    className="group-hover:scale-110 pri-anim absolute left-[70%] top-[84%]"
                  />
                </div>
                <div className="flex flex-col items-start gap-[8px]">
                  <h2 className="text-[20px] lg:text-[36px] text-[#2A2A2A] font-semibold">
                    Tosin Ogundipo{" "}
                  </h2>
                  <p className="text-[18px] text-[#414141] ">
                    Real Estate Broker at Pentstone Realty
                  </p>
                  <div className="flex justify-start items-center gap-[8px] text-[14px] text-[#5A5A5A]">
                    <div className="w-[20px] h-[20px] bg-[#01C901] rounded-full"></div>{" "}
                    Online
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[24px] text-[#2A2A2A] font-semibold">
                  About Tosin{" "}
                </h2>
                <p className="text-black font-medium leading-[150%]">
                  Seyi is a dedicated and experienced real estate agent in
                  California. With a deep understanding of the local market and
                  a commitment to providing exceptional service, she is the
                  go-to choice for buyers and sellers looking to navigate the
                  California real estate landscape.{" "}
                </p>
                <p className="text-[#034159] pt-[32px] font-medium">
                  <span className="font-semibold">Specialties</span>: Property
                  management, Real estate development, Real estate appraising,
                  Retail leasing, Apartment brokerage
                </p>
              </div>
              <Image src="/img/linkedInn.svg" width={20} height={20} alt="" />
            </div>

            <div className="border-[1px] border-[#D9E2E6] rounded-[14px] lg:w-[40%] py-[24px] px-[20px]">
              <div className="flex justify-center items-center pb-[40px]">
                <Image
                  src="/img/icons/quote.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </div>
              <p className="text-[20px] text-center px-[10px] lg:px-[50px] pb-[24px] text-black font-medium">
                Don&apos;t wait to buy real estate. <br /> Buy real estate and
                wait.
              </p>

              <div className="w-full h-[1px] bg-black opacity-10 mb-[30px]"></div>

              <div className="w-full">
                <h2 className="font-semibold text-[24px] text-[#2A2A2A] pb-[22px]">
                  Professional Information
                </h2>

                <div className="flex gap-[26px] flex-col">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#000929] text-nowrap">Service Areas:</p>
                    <p className="text-[18px] font-medium text-black text-end">
                      Lagos, Abuja, Abia, Ibadan, Nationwide
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#000929] text-nowrap">Cell Phone:</p>
                    <p className="text-[18px] font-medium text-black text-end">
                      +706-335-7957{" "}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#000929] text-nowrap">Email:</p>
                    <p className="text-[18px] font-medium text-black text-end">
                      tosin@pentstonerealty.com{" "}
                    </p>
                  </div>

                  <button className="bg-primary py-[16px] rounded-[15px] text-center flex justify-center items-center gap-2 mt-[6px]">
                    <Image
                      src="/img/icons/whatsapp.svg"
                      width={25}
                      height={25}
                      alt=""
                    />
                    <p className="tet-[16px] font-bold text-white">
                      Start a Conversation
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPageBanner;
