"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const LeadingWebsites = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[85%]">
          <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
            <div className="w-full">
              <div className="flex justify-center items-center  ">
                <p className="text-[#212226] font-semibold text-[32px] text-center">
                  Get your property featured on market leading websites:
                </p>
              </div>

              <div className="mt-[2em] lg:mt-[4em] flex items-center gap-[20px] justify-center lg:justify-between flex-wrap px-[4em]">
                <Image
                  height={100}
                  width={250}
                  src="/img/leading1.png"
                  className="w-[35%] lg:w-[20%]"
                  alt=""
                />
                <Image
                  width={250}
                  height={100}
                  src="/img/leading2.png"
                  className="w-[35%] lg:w-[20%]"
                  alt=""
                />
                <Image
                  width={250}
                  height={100}
                  src="/img/leading3.png"
                  className="w-[35%] lg:w-[20%]"
                  alt=""
                />
                <Image
                  width={250}
                  height={100}
                  src="/img/leading4.png"
                  className="w-[35%] lg:w-[20%]"
                  alt=""
                />
              </div>

              <div className="flex justify-center items-center pt-[25px] lg:pt-[50px]">
                <button
                  className="bg-primary px-8 font-semibold py-3 rounded-xl text-white mt-8"
                  onClick={() => router.push("/sell_property_form")}
                >
                  Click to get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadingWebsites;
