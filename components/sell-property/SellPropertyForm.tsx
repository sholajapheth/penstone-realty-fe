"use client";
import { useState, useRef } from "react";

const Form = () => {
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
      <div className="flex justify-between w-full items-start pb-[70px] h-full">
        <div className="w-1/2 flex flex-col pt-[85px] px-[100px] text-secondary h-full">
          <h2 className="text-[54px] font-semibold pb-[24px]">
            Your home for professional help
          </h2>
          <p className="text-[18px] pb-[68px]">
            Selling your property shouldn&apos;t be a hassle with a partner you
            can trust.
            <span className="font-bold"> Urgent? Call +2348023237589</span>
          </p>

          <form className="text-[16px] flex flex-col gap-[24px]">
            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Intention</label>
              <select
                required
                className="border-[2px] outline-none rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
              >
                <option value="">Rent</option>
                <option value="">Select a property</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Type of property</label>
              <select
                required
                className="border-[2px] outline-none rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
              >
                <option value="">Residential</option>
                <option value="">Select a property</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Reason for selling / renting</label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
                placeholder="Enter reason"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Property address</label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
                placeholder="Input property address"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">City</label>
              <input
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
                placeholder="Input property address"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Upload property picture</label>
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
                <img src="/img/upload.png" alt="" />
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
                <img src="/img/clip.png" alt="" />
                <p>Select files</p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-[32px]">
              <div className="flex flex-col items-start gap-2">
                <label className="font-bold">First name</label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
                  placeholder="First name"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-bold">Last name</label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Email</label>
              <input
                type="email"
                required
                className="border-[2px] rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="font-bold">Phone number</label>
              <input
                type="tel"
                required
                className="border-[2px] rounded-[10px] h-[35px] lg:h-[52px] px-[16px] w-full"
                placeholder="Phone number"
              />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <input type="checkbox" required className="" />
              <label className="text-[18px]">
                Click Here to accept the terms of our{" "}
                <span className="underline">Privacy Policy</span>.
              </label>
            </div>

            <button className="bg-primary text-white font-semibold py-3 rounded-xl">
              Submit
            </button>
          </form>
        </div>

        <div className="w-1/2 bg-primary text-white pb-[120px] h-full pt-[235px]">
          <img src="/img/house.png" alt="" />
          <div className="pt-[150px] px-[64px] flex flex-col gap-[32px]">
            <div>
              <p className="font-bold text-[60px] text-white pb-20px">
                Bring your property goals to life Now!{" "}
              </p>
              <p className="font-medium text-[18px]">
                Reach out and get started in just 3 minutes.
              </p>
            </div>

            <div className="flex justify-start items-center gap-[16px]">
              <img src="/img/avatar.png" alt="" />
              <div className="flex flex-col items-start">
                <div className="flex justify-start items-center gap-[4px]">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <p className="text-[18px] font-medium">5.0</p>
                </div>
                <p className="text-[18px] font-medium">200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
