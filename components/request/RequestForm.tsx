"use client";
import { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarGroup } from "@chakra-ui/react";

const RequestForm = () => {
  const validInput: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files.item(0);

      if (!file) return;
    }
  };
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row w-full items-start">
        <div className="w-full lg:w-1/2 flex flex-col pt-[40px] lg:pt-[85px] px-[20px] lg:px-[100px] text-secondary pb-[60px] lg:pb-0">
          <h2 className="text-[30px] lg:text-[54px] font-semibold pb-[24px] lg:leading-[63px]">
            Start a Request
          </h2>
          <p className="text-[18px] pb-[30px] lg:pb-[68px]">
            Describe your request using the self-served form below.
            <span className="font-bold"> Urgent? Call +2348023237589</span>
          </p>

          <form className="text-[16px] flex flex-col gap-[24px]">
            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">
                What can we help you with today?
              </label>
              <select
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
              >
                <option value="" disabled>
                  Ask a question / get help
                </option>
                <option value="">Select a property</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">I am a...?</label>
              <select
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
              >
                <option value="" disabled>
                  ..
                </option>
                <option value="">Select a property</option>
              </select>
            </div>

            <div className="flex justify-between items-center gap-[32px]">
              <div className="flex flex-col items-start gap-2">
                <label className="font-bold">First Name</label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                  placeholder="First name"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-bold">Last name</label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Email</label>
              <input
                type="email"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Phone number</label>
              <input
                type="tel"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="Phone number"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Describe Request</label>
              <textarea
                required
                className="border-[2px] rounded-[10px] h-[90px] lg:h-[180px] p-[16px] w-full"
                placeholder="Leave us a message"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">
                What can we help you with today?
              </label>
              <input
                type="file"
                required
                className="hidden"
                ref={validInput}
                onChange={handleValidChange}
              />
              <div
                className="border-[2px] border-dashed  rounded-[10px] px-8 w-full flex flex-col justify-center items-center cursor-pointer py-[26px]"
                onClick={() => {
                  if (validInput.current) {
                    // @ts-ignore
                    validInput.current.click();
                  }
                }}
              >
                <Image width={30} height={30} src="/img/upload.png" alt="" />
                <p>Select or drop file</p>
              </div>
              <div
                className="rounded-[10px] px-4 gap-[5px] bg-[#eeeeee] flex justify-center items-center cursor-pointer py-[5px]"
                onClick={() => {
                  if (validInput.current) {
                    // @ts-ignore
                    validInput.current.click();
                  }
                }}
              >
                <Image width={15} height={15} src="/img/clip.png" alt="" />
                <p>Select files</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <input type="checkbox" required className="" />
              <label className="text-[18px]">
                Click Here to accept the terms of our{" "}
                <span className="underline">Privacy Policy</span>.
              </label>
            </div>

            <button className="bg-primary text-white font-semibold py-3 rounded-xl">
              Start a request
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 bg-primary text-white px-[20px] lg:pb-[100px] pb-[50px] ">
          <Image width={400} height={600} className="w-full h-full" src="/img/telephone.png" alt="" />
          <div className="pt-[50px] lg:pt-[150px] px-[20px] lg:px-[64px] flex flex-col gap-[32px]">
            <div>
              <p className="font-bold lg:text-left text-center text-[35px] lg:text-[60px] text-white pb-20px">
                Bring your property goals to life Now!
              </p>
              <p className="font-medium lg:text-left text-center text-[18px]">
                Reach out and get started in just 3 minutes.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-[16px]">
              <AvatarGroup size="md" max={4}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex justify-start items-center gap-[4px]">
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <p className="text-[18px] font-medium">5.0</p>
                </div>
                <p className="text-[18px] text-center lg:text-left font-medium">
                  200+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
