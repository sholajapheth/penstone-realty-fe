import Image from "next/image";
import ProgressBar from './ProgressBar'
const Vacant = () => {
  return (
    <>
      <div className="gap-[48px] px-[50px] flex justify-between items-start">
        <div className="w-[60%]">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[20px] text-[#000929] font-semibold">
              Available rooms
            </h2>
            <p className="text-[16px] text-[#000929]">Total rooms available</p>
            <ProgressBar
              progress={50}
              label="Download Progress"
              className="w-full"
            />
            <div className="flex justify-between items-center w-full">
              <p className="font-medium text-secondary text-[16px]">
                2 rooms available of 4 rooms
              </p>
              <p className="font-medium text-secondary text-[16px]">50%</p>
            </div>
          </div>

          <div className="mt-[32px] flex flex-col gap-[16px] items-start">
            <h2 className="text-[20px] text-[#000929] font-semibold">
              Description
            </h2>
            <p className="text-[16px] text-[#000929]">
              Check out that Custom Backyard Entertaining space! 3237sqft, 4
              Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm
              Harbor neighborhood of Texas.
            </p>

            <button className="text-[14px] text-secondary border-b-[2px] border-b-secondary font-semibold">
              Show more
            </button>
          </div>

          <div className="flex flex-col items-start gap-[16px] my-[32px]">
            <h2 className="text-[20px] text-[#000929] font-semibold">
              Equipment
            </h2>

            <div className="flex justify-start flex-wrap w-full gap-4">
              <div className="text-[16px] font-medium text-secondary bg-[#D9E2E6] rounded-[8px] py-2 px-4">
                Fitted Kitchen
              </div>
              <div className="text-[16px] font-medium text-secondary bg-[#D9E2E6] rounded-[8px] py-2 px-4">
                Garden
              </div>
              <div className="text-[16px] font-medium text-secondary bg-[#D9E2E6] rounded-[8px] py-2 px-4">
                Stepless Access
              </div>
              <div className="text-[16px] font-medium text-secondary bg-[#D9E2E6] rounded-[8px] py-2 px-4">
                Suitable for flat sharing
              </div>
              <div className="text-[16px] font-medium text-secondary bg-[#D9E2E6] rounded-[8px] py-2 px-4">
                Guest Toilet
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <div className=" border-[#D9E2E6] border-[1.5px] rounded-[8px] py-6 w-full bg-primary relative flex flex-col items-start mb-[24px]">
            {/* <Image
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
            /> */}

            <div className="flex justify-center items-center gap-5 px-6 mb-[24px]">
              <Image
                src="/img/sample-avatar.png"
                width={48}
                height={48}
                alt=""
              />
              <div className="flex gap-1 items-start flex-col">
                <p className="font-bold text-white text-[16px]">Manuel Villa</p>
                <p className="text-[14px] text-white">Tenants</p>
              </div>
            </div>

            <div className="bg-[#D9E2E6] h-[1px] w-full"></div>

            <div className="my-4 flex flex-col items-start w-full gap-4 px-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-[14px] text-white font-medium">
                  Move-in Date
                </p>
                <p className="text-[14px] font-semibold text-white">
                  Dec 1, 2021
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-[14px] text-white font-medium">Contact</p>
                <p className="text-[14px] font-semibold text-white">
                  (+1) 324-5329
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-[14px] text-white font-medium">
                  Price per month
                </p>
                <p className="text-[14px] font-semibold text-white">$1,900</p>
              </div>
            </div>

            <div className="px-6 w-full">
              <button className="flex justify-center w-full h-[48px] items-center bg-white px-[10px] gap-1 rounded-[8px]">
                <Image src="/img/message2.png" width={20} height={20} alt="" />
                <p className="font-bold text-secondary text-[16px]">
                  Send Message
                </p>
              </button>
            </div>
          </div>

          <div className=" border-[#D9E2E6] border-[2px] rounded-[8px] py-6 w-full bg-[#F7F7FD] relative flex flex-col items-start z-40 overflow-hidden">
            <div className="absolute bg-[#D9E2E6] rounded-full right-[-55px] bottom-[-70px] w-[150px] h-[150px] z-0" />

            <div className="px-8 w-full z-40 relative">
              <p className="text-[18px] font-medium text-[#000929]">
                Rents collected <br /> this month:
              </p>
              <div className="flex justify-between items-center mt-4  w-full">
                <div className="flex justify-start items-center gap-2">
                  <p className="text-[24px] font-bold text-secondary">83% </p>
                  <p className="text-[16px] font-medium  text-secondary">
                    60 tenants
                  </p>
                </div>
                <Image
                  src="/img/rightCarat2.png"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacant;
