"use client";
import Image from "next/image";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { FaRegCircleCheck, FaWhatsapp } from "react-icons/fa6";
import { LuBedSingle } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import ListingCard from "../home/ListingCard";
import { NewsLetter } from "../common";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Feature({
  icon,
  feature,
  tagline,
}: {
  icon: ReactElement;
  feature: string;
  tagline: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-gray-400 text[12px] font-medium">{feature}</p>
      <div className="flex items-center gap-1 text-gray-400">
        {icon}
        <p className="font-bold text-[14px] text-black">{tagline}</p>
      </div>
    </div>
  );
}

const propertyFeatures = [
  "All Rooms Ensuite",
  "Family Lounge",
  "Swimming Pool",
  "Balcony",
  "Fitted Kitchen",
  "Walk-in Closet",
  "Chandeliers",
  "Security",
  "Walk-in shower",
  "Solar inverter",
  "Spacious Rooms",
];

const propertyAttributes = [
  "Governor consent document",
  "Near MM2 Airport",
  "15 mins drive from Fela Shrine",
  "Property within a safe estate",
  "Middle-class neighbourhood",
];

const PropertyDetails = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dum_pic = [
    "/img/property-detail-img.png",
    "/img/home-landing-bg.png",
    "/img/property-detail-img.png",
    "/img/home-landing-bg.png",
  ];
  useEffect(() => {
    const handleScroll = () => {
      const { current } = showcaseRef;
      if (current) {
        const scrollOffset = current.scrollLeft;
        const totalWidth = current.scrollWidth - current.clientWidth;
        const newIndex = Math.round(
          (scrollOffset / totalWidth) * (dum_pic.length - 1)
        ); // Calculate the index based on scroll position
        setCurrentIndex(newIndex);
      }
    };

    const showcaseElement = showcaseRef.current;
    if (showcaseElement) {
      showcaseElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (showcaseElement) {
        showcaseElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [dum_pic, currentIndex]); // Add dum_pic to dependencies since its length might change

  return (
    <div className=" px-[1em] md:px-[3em] lg:px-[4em] xl:px-[6em] py-[2em]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
        <div className="col-span-2">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4  ">
            <div className="relative h-full">
              <div
                className=" flex h-full overflow-scroll hide-scroll-indicators"
                ref={showcaseRef}
              >
                {dum_pic.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="property picture"
                    width={200}
                    height={200}
                    className="w-full h-full mr-4"
                  />
                ))}
              </div>
              <div className="absolute bottom-6 w-full flex gap-2  justify-center ">
                {dum_pic.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-6 rounded-md transition-all duration-700 ease-in ${
                      currentIndex === index
                        ? "bg-white"
                        : "backdrop-blur bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-row md:flex-col  gap-2 md:gap-4">
              <div className="hover:border h-full  hover:border-secondary hover:p-1 rounded-md duration-300 ease-in-out transition-all ">
                <Image
                  src={"/img/home-landing-bg.png"}
                  width={200}
                  height={200}
                  alt="property picture "
                  className="w-full h-full  rounded-md"
                />
              </div>
              <div className="hover:border h-full  hover:border-secondary hover:p-1 rounded-md duration-300 ease-in-out transition-all relative ">
                <Image
                  src={"/img/home-landing-bg.png"}
                  width={200}
                  height={200}
                  alt="property picture"
                  className="w-full h-full rounded-md "
                />

                <div></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-300  rounded-xl px-[2em] py-[1em] mt-[2em] flex items-center justify-start md:justify-between flex-wrap gap-4">
            <Feature
              icon={<LuBedSingle size={25} />}
              feature="Bedrooms"
              tagline="4"
            />
            <Feature
              icon={<TbBath size={25} />}
              feature="Bathrooms"
              tagline="4"
            />
            <Feature
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5" clip-path="url(#clip0_565_15437)">
                    <path
                      d="M10.5974 18.6524L4.14718 12.2022C3.41709 11.4721 3.41709 10.1278 4.14718 9.39773L10.5974 2.94751C11.3275 2.21743 12.6717 2.21743 13.4018 2.94751L19.852 9.39773C20.5821 10.1278 20.5821 11.4721 19.852 12.2022L13.4018 18.6524C12.6717 19.3825 11.3275 19.3825 10.5974 18.6524V18.6524Z"
                      stroke="#000929"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.40039 15.806L7.63685 21.0424"
                      stroke="#000929"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.3633 21.0424L21.5997 15.806"
                      stroke="#000929"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_565_15437">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              feature="Square Area"
              tagline="6x8 m²"
            />
            <Feature
              icon={<FaRegCircleCheck size={22} />}
              feature="Active"
              tagline="4"
            />
            <Feature
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
                    stroke="#808494"
                    stroke-width="1.5"
                  />
                  <path
                    d="M3 9H21"
                    stroke="#808494"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8 2L8 5"
                    stroke="#808494"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 2V5"
                    stroke="#808494"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="12" cy="15" r="1" fill="#808494" />
                  <circle cx="16" cy="15" r="1" fill="#808494" />
                  <circle cx="8" cy="15" r="1" fill="#808494" />
                </svg>
              }
              feature="Available From"
              tagline="21st Feb, 2024"
            />
          </div>

          <div className="mt-8 border-b border-gray-300 pb-8">
            <p className="text-[24px] font-bold mb-4">About Property</p>
            <p>
              Check out that Custom Backyard Entertaining space! 3237sqft, 4
              Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm
              Harbor neighborhood of Lagos, Nigeria. Well cared for with tons of
              upgrades! Newer stainless steel appliances will stay with the
              unit, including dishwasher, fridge, stove, microwave, and washer
              and dryer. Tenant pays electricity and gas bills. Water, Sewer,
              and Trash are covered by Landlord. Tenant is responsible for
              lawncare and snow removal. Landlord provides lawn mower. Minimum
              one year lease.
            </p>
          </div>

          <div className="mt-8 border-b border-gray-300 pb-8">
            <p className="text-[24px] font-bold mb-4">Property Features </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {propertyFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaRegCircleCheck size={22} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-b border-gray-300 pb-8">
            <p className="text-[24px] font-bold mb-4">Property Attributes </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {propertyAttributes.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaRegCircleCheck size={22} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8  pb-8">
            <p className="text-[24px] font-bold mb-4">Map </p>
            <div>
              <Image
                src={"/img/map.png"}
                width={200}
                height={200}
                alt="map"
                className="w-full h-full rounded-md "
              />
            </div>

            <p className="text-primary font-semibold flex items-center gap-2 mt-4">
              See more listings in Ibeju, Lagos State
              <CgChevronRight size={20} />
            </p>
          </div>
        </div>
        {/* Right side (Price Summary) */}

        <div>
          <div className="rounded-2xl p-4 border-secondary border ">
            <div className="flex items-center justify-between ">
              <p className="font-semibold text-[20px] md:text-[26px] ">
                Price Summary
              </p>
              <BiChevronUp size={25} />
            </div>

            <div className="mt-4">
              <p className="text-gray-300 font-medium text-[14px] ">Rent</p>
              <p className="text-[20px] md:text-[24px] font-bold">
                NGN 248,933.57
                <span className="text-[14px] md:text-[18px] font-medium">
                  /Month
                </span>
              </p>
            </div>

            <div className="text-secondary mt-6">
              <p className="text-[12px] md:text-[16px] font-semibold">
                DURATION
              </p>

              <div className="border-secondary border text-secondary rounded-xl  flex items-center mt-2 ">
                <select
                  name="duration"
                  className="w-full px-5 py-4 rounded-xl flex-1 focus:outline-none "
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <BiChevronDown className="mr-2" size={30} />
              </div>
            </div>

            <div className="my-6 flex items-center justify-between">
              <p className="text-gray-400 text-[12px] md:text-[16px] font-medium">
                Service Charge
              </p>
              <p className="text-[14px] md:text-[18px] font-medium">
                NGN 186,420
              </p>
            </div>
            <div className="my-6 flex items-center justify-between">
              <p className="text-gray-400 text-[12px] md:text-[16px] font-medium">
                Refundable security deposit
              </p>
              <p className="text-[14px] md:text-[18px] font-medium">
                NGN 186,420
              </p>
            </div>
            <div className="my-6 flex items-center justify-between">
              <p className="text-gray-400 text-[12px] md:text-[16px] font-medium">
                One-time booking fee
              </p>
              <p className="text-[14px] md:text-[18px] font-medium">
                NGN 186,420
              </p>
            </div>
            <div className="my-6 flex items-start justify-between border-t border-gray-400 border-b border-b-gray-400 py-4">
              <div>
                {" "}
                <p className="text-gray-400 text-[12px] md:text-[16px] font-medium">
                  Total
                </p>
                <p className="text-gray-400 text-[10px] md:text-[14px] font-medium">
                  (incl. of all taxes)
                </p>
              </div>
              <p className="text-[18px] md:text-[24px] font-bold">
                NGN 186,420
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src={"/img/sample-avatar.png"}
                height={70}
                width={70}
                alt="realtor"
                className="rounded-full "
              />

              <div>
                <p className="text-[18px] md:text-[24px] font-bold">
                  Abayomi Temitope
                </p>
                <p className=" text-[12px] md:text-[16px] ">
                  Real Estate Broker
                </p>
              </div>
            </div>

            <div className="text-secondary mt-6">
              <p className="text-[12px] md:text-[16px] font-semibold">
                Your Whatsapp number
              </p>

              <div className="border-secondary border text-secondary rounded-xl pl-4 flex items-center mt-2 ">
                <p>+234 </p>
                <input
                  placeholder="xx xx xx"
                  className="w-full px-3 py-4 rounded-xl flex-1 focus:outline-none "
                />
              </div>
            </div>

            <button className="w-full rounded-xl bg-primary py-4 flex justify-center text-white mt-6">
              <div className="flex items-center gap-4">
                <FaWhatsapp size={25} />
                <p>Start a Conversation</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-8 ">
        <div className="flex items-center justify-between my-8">
          <p className="font-semibold text-[25px] md:text-[40px] ">
            Similar Listings
          </p>
          <button className="bg-primary px-8 py-3 text-white font-medium  rounded-md">
            View all listings
          </button>
        </div>

        <div className="flex items-center justify-between flex-wrap flex-col lg:flex-row gap-[32px] ">
          {[1, 2, 3].map((item) => (
            <ListingCard key={item} />
          ))}
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default PropertyDetails;
