"use client"
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="py-[4em] lg:py-[5em] px-[1em] flex items-center justify-center bg-[#F5FCFF]">
      <div className="text-center text-secondary">
        <p className="hidden lg:block font-semibold text-[24px]">
          Subscribe to join
        </p>
        <p className=" font-semibold text-[24px] lg:hidden">No Spam Promise</p>
        <p className="hidden lg:block font-semibold text-[32px] leading-[125%] text-[#000929] lg:text-[40px] my-3">
          Property Investor Centre
        </p>
        <p className="lg:hidden font-semibold text-[32px] leading-[125%] text-[#000929] lg:text-[40px] my-3">
          How can we help?
        </p>
        <p className="hidden lg:blockfont-medium text-[#000929]">
          Stay updated with latest exclusive offers, updates and industry
          insights
        </p>{" "}
        <p className="lg:hidden font-medium text-[#000929]">
          Discover ways to increase your home&apos;s <br /> value and get
          listed. No Spam.
        </p>
        <div className="bg-white rounded-2xl p-3 mt-4 shadow-md flex items-center border border-[#5A5A5A1A] ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 h-6 lg:h-full p-4 w-full focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <a
            href={`mailto:pentstonerealty@gmail.com?subject="Newsletter subscription"&body=${email}`}
            className="hidden lg:block bg-primary px-8  font-bold py-3 rounded-xl text-white"
          >
            Submit
          </a>
        </div>
        <a
          href={`mailto:pentstonerealty@gmail.com?subject=Newsletter&body=${email}`}
          className="bg-primary w-full my-3 px-8 lg:hidden font-bold py-3 rounded-xl text-white"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default NewsLetter;
