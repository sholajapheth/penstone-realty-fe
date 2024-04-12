"use client";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const freqQuesNav = [
  {
    name: "Rent",
  },
  {
    name: "Sell",
  },
  {
    name: "Construction",
  },
  {
    name: "Advisory",
  },
  {
    name: "Management",
  },
  {
    name: "Agent",
  },
];

const freqAskedQues = [
  {
    id: 0,
    ques: "How do I list my property with Pentstone?",
    answer:
      "To list your property with Pentstone, simply reach out to us through our website or contact information. Our team will guide you through the listing process and assist with any necessary paperwork.",
  },
  {
    id: 1,
    ques: "What property types does Pentstone accept?",
    answer:
      "To list your property with Pentstone, simply reach out to us through our website or contact information. Our team will guide you through the listing process and assist with any necessary paperwork.",
  },
  {
    id: 2,
    ques: "What are the selling fees?",
    answer:
      "To list your property with Pentstone, simply reach out to us through our website or contact information. Our team will guide you through the listing process and assist with any necessary paperwork.",
  },
  {
    id: 3,
    ques: "Can Pentstone help with property valuation?",
    answer:
      "To list your property with Pentstone, simply reach out to us through our website or contact information. Our team will guide you through the listing process and assist with any necessary paperwork.",
  },
];

const FreqAskedQues = () => {
  const [activeNav, setActiveNav] = useState("Sell");
  const [activeQue, setActiveQue] = useState<null | number>(null);

  return (
    <div className="px-[1em] md:px-[5em]">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
          Frequently Asked Questions
        </p>
      </div>

      <div className="mt-[1em] md:mt-[4em] flex flex-col md:grid grid-cols-3 gap-[4em] lg:gap-[8em]">
        <div className="flex flex-col items-start text-start">
          {freqQuesNav.map((item, index) => (
            <button
              key={index}
              className={`p-4 w-full text-start ${
                activeNav === item.name ? "font-semibold border" : ""
              }`}
              onClick={() => setActiveNav(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="col-span-2">
          {freqAskedQues.map((item) => {
            const isActive = activeQue === item.id;
            const handleClick = () => {
              setActiveQue(isActive ? null : item.id);
            };

            return (
              <div
                key={item.id}
                className="border p-4 text-secondary cursor-pointe my-2"
              >
                <div
                  onClick={handleClick}
                  className="flex items-center justify-between"
                >
                  <p className="font-semibold text-[18px]">{item.ques}</p>
                  {isActive ? (
                    <BiChevronUp size={25} />
                  ) : (
                    <BiChevronDown size={25} />
                  )}
                </div>
                <p
                  className={`  ${
                    isActive
                      ? "max-h-[500px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  } transition-all duration-500 overflow-hidden ease-in-out`}
                >
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreqAskedQues;
