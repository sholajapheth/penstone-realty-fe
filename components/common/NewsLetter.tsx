import React from "react";

const NewsLetter = () => {
  return (
    <div className="py-[5em] flex items-center justify-center bg-[#E8F9F733]">
      <div className="text-center text-secondary">
        <p className=" font-semibold text-[24px]">Subscribe to join</p>
        <p className="font-semibold text-[40px] my-3">
          Property Investor Centre
        </p>
        <p className="font-medium ">
          Stay updated with latest exclusive offers, updates and industry
          insights
        </p>

        <div className="bg-white rounded-2xl p-3 mt-4 shadow-md flex items-center border border-[#5A5A5A1A] ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 h-full p-4 w-full focus:outline-none"
          />
          <button className="bg-primary px-8  font-bold py-3 rounded-xl text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
