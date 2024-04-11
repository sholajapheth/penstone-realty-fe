import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface SideNavProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
}

const SideNav = ({ open, handleOpen }: SideNavProps) => {

  return (
    <>
      <div className=" md:transition-all md:duration-500 md:ease-in-out ">
        <div
          className={`flex flex-col justify-between h-screen items-start w-full pt-2 text-[14px] ${
            open ? "" : ""
          }  gap-y-3 md:transition-all md:duration-500 md:ease-in-out `}
        >
          <div className="flex flex-col w-full ">
            <div
              className={`py-[30px] px-[15px] flex ${
                !open ? "justify-center" : "justify-start"
              }`}
            >
              <Image
                width={45}
                height={45}
                src="/img/Landscape.png"
                alt=""
                className={`${open ? "hidden" : "block"}
                    }`}
              />
              <Image
                width={120}
                height={120}
                src="/img/LandscapeLg.png"
                alt=""
                className={`${open ? "block" : "hidden"}`}
              />
            </div>
            <div
              className={`w-full h-[1px] bg-[#AFAFAF] ${
                !open ? "hidden" : "block"
              }`}
            ></div>
            <div
              className={`flex flex-col ${
                open ? "justify-start gap-[15px]" : "justify-center gap-[10px]"
              } px-[15px]`}
            >
              <div className="hover:bg-transparent rounded-[4px] w-full py-1 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/Dashboard.png"
                    alt=""
                    // className="w-full h-full"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    Dashboard
                  </p>
                </div>
              </div>
              <div className="hover:bg-transparent rounded-[4px] pl-1 w-full py-3 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/Insight.png"
                    alt=""
                    className="w-[30px] h-[30px] object-fill"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    Rental Portfolio
                  </p>
                </div>
              </div>
              <div className="hover:bg-transparent rounded-[4px] w-full py-1 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/My Listings.png"
                    alt=""
                    // className="w-full h-full"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    New Listing
                  </p>
                </div>
              </div>
              <div className="hover:bg-transparent rounded-[4px] w-full py-1 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/Tenants.png"
                    alt=""
                    // className="w-full h-full"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    Tenants
                  </p>
                </div>
              </div>
              <div className="hover:bg-transparent rounded-[4px] w-full py-1 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/Rent Payment.png"
                    alt=""
                    // className="w-full h-full"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    Rent Payment
                  </p>
                </div>
              </div>
              <div className="hover:bg-transparent rounded-[4px] w-full py-1 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/Message.png"
                    alt=""
                    // className="w-full h-full"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    Message
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full ">
            <div
              className={`flex flex-col pb-[32px] ${
                open ? "justify-start gap-[15px]" : "justify-center gap-[10px]"
              }  px-[15px]`}
            >
              <div className="hover:bg-transparent rounded-[4px] pl-1 w-full py-3 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/Help.png"
                    alt=""
                    className="w-[40px] h-[40px] object-fill"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    Help
                  </p>
                </div>
              </div>
              <div className="hover:bg-transparent rounded-[4px] pl-1 w-full py-3 hover:rounded-[4px]">
                <div
                  className={`flex items-center gap-1 ${
                    !open ? "justify-center" : "justify-start"
                  } `}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/img/Settings.png"
                    alt=""
                    className="w-[40px] h-[40px] object-fill"
                  />
                  <p
                    className={`${
                      open ? "block" : "hidden"
                    } text-white font-normal `}
                  >
                    Settings
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleOpen} className="absolute top-4 right-[-18px]">
            <Image
              width={40}
              height={40}
              className="w-full h-full"
              src="/img/slider.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNav;
