import Image from "next/image";
import React from "react";

const GetIntouch = () => {
  return (
    <div className=" p-[1em] md:p-[5em] flex items-center justify-center pb-0 md:pb-[30em] lg:pb-[20em]">
      <div className="w-[95%] lg:w-[80%] relative flex items-center justify-center  ">
        <Image
          src={"/img/getIntouch.png"}
          alt="getintouch"
          height={400}
          width={400}
          quality={100}
          unoptimized={true}
          className="w-[80%] hidden md:inline-block"
        />

        <div className=" md:absolute top-[40%] flex flex-col items-center justify-center w-full ">
          <div className="p-[2em] rounded-xl bg-white text-center py-[3em]  border border-gray-300 shadow-md">
            <p className="text-[28px] font-semibold ">Get In touch</p>
            <p className="mt-4 ">You can reach us anytime. We are active!</p>

            <div className="flex items-center gap-8 mt-10 text-left">
              <div className="">
                <p className="font-semibold mb-2">First name</p>
                <input
                  placeholder="First name"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="">
                <p className="font-semibold mb-2">Last name</p>
                <input
                  placeholder="Last name"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>

            <div className="text-left mt-8">
              <p className="font-semibold mb-2">Email</p>
              <input
                placeholder="Email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="text-left mt-8">
              <p className="font-semibold mb-2">Phone number</p>
              <input
                placeholder="Phone number"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="text-left mt-8">
              <p className="font-semibold mb-2">Message</p>
              <textarea
                placeholder="Email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                rows={5}
              />
            </div>

            <button className="bg-primary px-8  font-bold py-3 rounded-xl text-white mt-8">
              Request a call back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetIntouch;
