import Image from "next/image";

const Stats = () => {
  return (
    <>
      <div className=" mx-[36px] flex justify-between items-center gap-[24px]">
        <div className=" border-[#D9E2E6] border-[2px] rounded-[8px] p-6 w-[76%]">
          <h2 className="text-[#000929] text-[18px] font-medium mb-2">
            Monthly Revenue
          </h2>

          <div className="flex justify-between items-center pb-[24px]">
            <div className="flex justify-center items-center gap-2">
              <p className="text-[32px] font-semibold leading-[125%]">$5,800</p>
              <p className="text-[#27AE60] bg-greenBg py-[6px] px-[10px] rounded-[12px]">
                +10.6%
              </p>
            </div>

            <div className="gap-2 flex justify-end items-center">
              <p className="flex justify-center items-center text-center text-[#000929] font-medium text-[14px] cursor-pointer h-[32px] w-[32px] rounded-full bg-white">
                D
              </p>
              <p className="flex justify-center items-center text-center text-[#000929] font-medium text-[14px] cursor-pointer h-[32px] w-[32px] rounded-full bg-white">
                W
              </p>
              <p className="flex justify-center items-center text-center text-white font-medium text-[14px] cursor-pointer h-[32px] w-[32px] rounded-full bg-secondary">
                M
              </p>
              <p className="flex justify-center items-center text-center text-[#000929] font-medium text-[14px] cursor-pointer h-[32px] w-[32px] rounded-full bg-white">
                Y
              </p>
            </div>
          </div>

          <div className="w-full h-[180px] bg-blue-400"></div>
        </div>
        <div className=" border-[#D9E2E6] border-[1.5px] rounded-[8px] p-6 w-[23%] bg-primary relative flex flex-col items-start">
          <Image
            src="/img/circle.svg"
            width={40}
            height={40}
            alt=""
            className="absolute right-0 bottom-0 w-[50%] h-[50%] z-0"
          />
          <Image
            src="/img/circle2.svg"
            width={40}
            height={40}
            alt=""
            className="absolute right-0 bottom-0 w-[90%] h-[45%] z-0"
          />

          <div className="flex justify-center items-center bg-white px-[10px] py-[6px] gap-1 rounded-[8px] mb-[24px]">
            <Image src="/img/pro.png" width={16} height={16} alt="" />
            <p className="font-bold text-secondary text-[14px]">PRO</p>
          </div>
          <p className="text-[20px] text-white font-bold leading-[140%] mb-4">
            Streamline your <br /> process
          </p>

          <p className="text-[14px] text-white font-medium leading-[140%] mb-[40px]">
            All rent payments are deposited <br /> automatically into your bank{" "}
            <br /> account within 24 hours.
          </p>

          <div className="flex justify-center w-full h-[48px] items-center bg-white px-[10px] py-[6px] gap-1 rounded-[8px] mb-[5px]"></div>
        </div>
      </div>
    </>
  );
};

export default Stats;
