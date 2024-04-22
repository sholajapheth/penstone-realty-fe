"use client"

import Image from "next/image";
import Vacant from "./Vacant";
import Request from "./Request";
import { useState } from "react";

const Properties = () => {
    const [showDetail, setShowDetail] = useState("vacant")


  return (
    <>
      <div className="flex justify-between items-start text-[#00080B]">
        <div className="mt-6 w-[35%] flex-grow-1">
          <div className="flex justify-between w-full items-center px-[24px] pb-[32px]">
            <div className="flex justify-start items-center gap-1">
              <p className="font-semibold text-[20px] text-black">Properties</p>
              <p className="font-bold text-[14px] bg-secondary py-1 px-[5.5px] rounded-[8px] text-white">
                14
              </p>
            </div>
            <div>
              <Image src="/img/filter.png" width={24} height={24} alt="" />
            </div>
          </div>
          <div className="relative mb-6 px-6">
            <input
              type="search"
              name=""
              id=""
              className="border-[#D9E2E6] border-[2px] rounded-[8px] h-[56px] outline-none w-full pl-12 bg-detailBg"
              placeholder="Search..."
            />
            <Image
              src="/img/search2.png"
              width={24}
              height={24}
              alt=""
              className="absolute top-[16px] left-10"
            />
          </div>

          <div className="h-[2px] w-full bg-[#D9E2E6]"></div>

          <div className="flex flex-col gap-0">
            <div>
              <div className="flex justify-between items-center w-full p-[24px]">
                <div className="flex items-start gap-[16px]">
                  <Image
                    width={72}
                    height={56}
                    src="/img/smallHouse.png"
                    alt=""
                    className="rounded-[8px]"
                  />
                  <div>
                    <p className="font-semibold text-[#00080B] text-[18px] pb-2">
                      Faulkner Ave
                    </p>
                    <h2 className="text-[#00080B] text-[16px] font-medium">
                      909 Woodland St, Michig...
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-end ">
                  <button className="text-[12px] font-[600] text-[#F06565] bg-[#FCE3E3] rounded-[16px] py-1 px-2">
                    MAINTENANCE
                  </button>
                  <p className="text-[#00080B]">128 sq m</p>
                </div>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-[#D9E2E6]"></div>
            <div>
              <div className="flex justify-between items-center w-full p-[24px]">
                <div className="flex items-start gap-[16px]">
                  <Image
                    width={72}
                    height={56}
                    src="/img/smallHouse.png"
                    alt=""
                    className="rounded-[8px]"
                  />
                  <div>
                    <p className="font-semibold text-[#00080B] text-[18px] pb-2">
                      Faulkner Ave
                    </p>
                    <h2 className="text-[#00080B] text-[16px] font-medium">
                      909 Woodland St, Michig...
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end justify-end ">
                  <button className="text-[12px] font-[600] text-[#27AE60] bg-greenBg rounded-[16px] py-1 px-2">
                    OCCUPIED
                  </button>
                  <p className="text-[#00080B]">128 sq m</p>
                </div>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-[#D9E2E6]"></div>
            <div>
              <div className="flex justify-between items-center w-full p-[24px]">
                <div className="flex items-start gap-[16px]">
                  <Image
                    width={72}
                    height={56}
                    src="/img/smallHouse.png"
                    alt=""
                    className="rounded-[8px]"
                  />
                  <div>
                    <p className="font-semibold text-[#00080B] text-[18px] pb-2">
                      Faulkner Ave
                    </p>
                    <h2 className="text-[#00080B] text-[16px] font-medium">
                      909 Woodland St, Michig...
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end justify-end ">
                  <button className="text-[12px] font-[600] text-secondary bg-[#D9E2E6] rounded-[16px] py-1 px-2" onClick={() => setShowDetail('vacant')}>
                    VACANT
                  </button>
                  <p className="text-[#00080B]">128 sq m</p>
                </div>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-[#D9E2E6]"></div>
            <div>
              <div className="flex justify-between items-center w-full p-[24px]">
                <div className="flex items-start gap-[16px]">
                  <Image
                    width={72}
                    height={56}
                    src="/img/smallHouse.png"
                    alt=""
                    className="rounded-[8px]"
                  />
                  <div>
                    <p className="font-semibold text-[#00080B] text-[18px] pb-2">
                      Faulkner Ave
                    </p>
                    <h2 className="text-[#00080B] text-[16px] font-medium">
                      909 Woodland St, Michig...
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end justify-end ">
                  <button className="text-[12px] font-[600] text-[#FFB154] bg-[#FFF1E0] rounded-[16px] py-1 px-2" onClick={() => setShowDetail('request')}>
                    REQUEST
                  </button>
                  <p className="text-[#00080B]">128 sq m</p>
                </div>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-[#D9E2E6]"></div>
            <div>
              <div className="flex justify-between items-center w-full p-[24px]">
                <div className="flex items-start gap-[16px]">
                  <Image
                    width={72}
                    height={56}
                    src="/img/smallHouse.png"
                    alt=""
                    className="rounded-[8px]"
                  />
                  <div>
                    <p className="font-semibold text-[#00080B] text-[18px] pb-2">
                      Faulkner Ave
                    </p>
                    <h2 className="text-[#00080B] text-[16px] font-medium">
                      909 Woodland St, Michig...
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end justify-end ">
                  <button className="text-[12px] font-[600] text-[#F06565] bg-[#FCE3E3] rounded-[16px] py-1 px-2">
                    MAINTENANCE
                  </button>
                  <p className="text-[#00080B]">128 sq m</p>
                </div>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-[#D9E2E6]"></div>
            <div>
              <div className="flex justify-between items-center w-full p-[24px]">
                <div className="flex items-start gap-[16px]">
                  <Image
                    width={72}
                    height={56}
                    src="/img/smallHouse.png"
                    alt=""
                    className="rounded-[8px]"
                  />
                  <div>
                    <p className="font-semibold text-[#00080B] text-[18px] pb-2">
                      Faulkner Ave
                    </p>
                    <h2 className="text-[#00080B] text-[16px] font-medium">
                      909 Woodland St, Michig...
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end justify-end ">
                  <button className="text-[12px] font-[600] text-[#F06565] bg-[#FCE3E3] rounded-[16px] py-1 px-2">
                    MAINTENANCE
                  </button>
                  <p className="text-[#00080B]">128 sq m</p>
                </div>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-[#D9E2E6]"></div>
          </div>
        </div>

        <div className="w-[65%] h-full border-l-[#D9E2E6] border-l-[2px] ">
          <Image
            src="/img/bigHouse.png"
            width={24}
            height={250}
            className="w-full h-[250px] object-cover"
            alt=""
          />
          <div className="py-[32px]">
            <div className="px-[50px] flex justify-between items-center">
              <div className="flex justify-between items-start flex-col gap-2">
                <h1 className="text-[32px] font-semibold leading-[125%]">
                  Beverly Springfield
                </h1>
                <p className="text-[#000929] font-medium text-[16px]">
                  2821 Lake Sevilla, Palm Harbor, TX
                </p>
              </div>

              <button className="flex gap-2 justify-center items-center py-[10px] px-4 border-[2px] border-[#D9E2E6] rounded-[8px]">
                <Image src="/img/calendar.png" width={16} height={16} alt="" />
                <p className="text-[14px] text-[#00080B]">
                  Show Property Calendar
                </p>
              </button>
            </div>

            <div className="mt-[32px] text-[#000929]">
              <div className="px-[50px]">
                <div className=" border-[#D9E2E6] border-[2px] rounded-[8px] p-[24px] flex justify-between items-center gap-4">
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-[16px] text-[#6C727F] font-medium">
                      Properties
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        src="/img/house2.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p className="text-[18px] font-semibold">46</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-[16px] text-[#6C727F] font-medium">
                      Rooms
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        src="/img/bed2.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p className="text-[18px] font-semibold">4</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-[16px] text-[#6C727F] font-medium">
                      Living Space
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        src="/img/dimension2.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p className="text-[18px] font-semibold">6x7.5 m²</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-[16px] text-[#6C727F] font-medium">
                      Year Built
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        src="/img/calendar2.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p className="text-[18px] font-semibold">2018</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-[16px] text-[#6C727F] font-medium">
                      Tenants
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        src="/img/tenants2.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p className="text-[18px] font-semibold">12</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-[16px] text-[#6C727F] font-medium">
                      Request
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        src="/img/house2.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p className="text-[18px] font-semibold">12</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[32px]">
                {showDetail === 'vacant' && <Vacant />}
                {showDetail === 'request' && <Request />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
