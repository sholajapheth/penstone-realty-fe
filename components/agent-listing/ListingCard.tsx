"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type List = {
  propertyId: string;
  // imgSrc: string,
  // title: string,
  streetAddress: string;
  // price: string,
  unitNumber: string;
  city: string;
  state: string;
  zipcode: string;
};

type ListProp = {
  lists: List | any;
};
const ListingCard = ({ lists }: ListProp) => {
  const router = useRouter();
  return (
    <div
      key={lists && lists.id}
      className="items-center justify-center flex cursor-pointer"
      onClick={() => router.push(`/property_details/${lists && lists.id}`)}
    >
      <div className="rounded-2xl relative overflow-hidden w-[354px] bg-white shadow-md hover:shadow-md backdrop-blur  hover:shadow-gray-400 group ease-linear duration-300 transition-all">
        <div
          className={`bg-[url(${
            lists &&
            lists.listingInformation &&
            lists.listingInformation.images[0]
          })] group-hover:scale-105 ease-linear duration-300 transition-all bg-cover bg-center  bg-no-repeat  relative   h-[328px]`}
          style={{
            backgroundImage: `url(${
              (lists &&
                lists.listingInformation &&
                lists.listingInformation.images[0]) ||
              "/img/hl-3.png"
            })`,
          }}
        ></div>

        <div className="backdrop-blur bg-white/20 rounded-2xl absolute top-4 left-4 flex items-center p-2 px-3 border-white gap-3">
          <div className="h-2 w-2 rounded-full bg-[#FFBF00] " />
          <p className="text-[12px] font-semibold">Leisure & Hospitality</p>
        </div>

        <div className="text-[#00080B] relative bg-white flex-1 text-center ">
          <div className="w-full flex items-center justify-center absolute -top-8">
            <div className="trapez rounded-md w-[230px] "></div>
          </div>

          <div className="absolute -top-6  flex items-center justify-center w-full">
            <div>
              <p className="font-bold text-[28px] ">
                ₦{" "}
                {lists &&
                  lists.listingInformation &&
                  lists.listingInformation.monthlyRent}
              </p>
              <p className="text-[14px]">PER MONTH</p>
            </div>
          </div>
        </div>
        <div className="text-[#00080B] text-center mt-[3.2em]">
          <p className="text-[20px]  font-semibold pb-3">
            {lists && lists.address && lists.address.streetAddress},{" "}
            {lists && lists.address && lists.address.city}{" "}
            {lists && lists.address && lists.address.state} State
          </p>
          <div className=" lg:bg-[#F6F6F6] rounded-lg p-4  flex items-center justify-center m-4 group-hover:bg-gray-300 ease-linear duration-300 transition-all">
            <div className=" gap-2 flex items-center w-full justify-between">
              {" "}
              <div className="flex items-end gap-1">
                <Image
                  src={"/img/icons/bed.png"}
                  height={20}
                  width={20}
                  alt="bed"
                />
                <p className="text-[12px]">
                  {lists &&
                    lists.listingInformation &&
                    lists.listingInformation.noOfBedrooms}{" "}
                  beds
                </p>
              </div>
              <div className="flex items-end gap-1">
                <Image
                  src={"/img/icons/bath.png"}
                  height={20}
                  width={20}
                  alt="bed"
                />
                <p className="text-[12px]">
                  {lists &&
                    lists.listingInformation &&
                    lists.listingInformation.noOfBaths}{" "}
                  baths
                </p>
              </div>
              <div className="flex items-end gap-1">
                <Image
                  src={"/img/icons/vector.png"}
                  height={20}
                  width={20}
                  alt="bed"
                />
                <p className="text-[12px]">
                  {lists &&
                    lists.listingInformation &&
                    lists.listingInformation.squareFeet}{" "}
                  sqft
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
