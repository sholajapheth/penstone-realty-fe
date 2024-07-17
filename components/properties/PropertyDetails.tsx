/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { FaRegCircleCheck, FaWhatsapp } from "react-icons/fa6";
import { LuBedSingle } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import ListingCard from "../home/ListingCard";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { listings } from "@/app/api/UseUser";
import { useAPI } from "@/app/lib/useApi";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Modal from "../app-components/CustomModal";

const Feature = ({
  icon,
  feature,
  tagline,
}: {
  icon: ReactElement;
  feature: string;
  tagline: string;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-gray-400 text[12px] font-medium">{feature}</p>
      <div className="flex items-center gap-1 text-gray-400">
        {icon}
        <p className="font-bold text-[14px] text-black">{tagline}</p>
      </div>
    </div>
  );
};

type PropertyProp = {
  property: string[] | any;
};

type DateFormatOptions = {
  monthNames?: string[]; // Optional array of month names to use
};

const PropertyDetails = ({ property }: PropertyProp) => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [duration, setDuration] = useState("1");
  const { useQuery } = useAPI();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | StaticImport>("");

  const prop = property && property.property;

  useEffect(() => {
    const handleScroll = () => {
      const { current } = showcaseRef;
      if (current) {
        const scrollOffset = current.scrollLeft;
        const totalWidth = current.scrollWidth - current.clientWidth;
        const newIndex = Math.round(
          (scrollOffset / totalWidth) *
            (prop &&
              prop?.listingInformation &&
              prop?.listingInformation.image &&
              prop?.listingInformation.image.length - 1)
        );
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
  }, [
    prop && prop?.listingInformation && prop?.listingInformation.image,
    currentIndex,
  ]);

  const images = prop?.listingInformation?.image || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  // useEffect(() => {
  //   const { current } = showcaseRef;
  //   if (current) {
  //     const totalWidth = current.scrollWidth - current.clientWidth;
  //     const newScrollPosition =
  //       (totalWidth / (images.length - 1)) * currentIndex;
  //     current.scrollLeft = newScrollPosition;
  //   }
  // }, [currentIndex, images.length]);

  console.log(currentIndex);

  const { data: lists } = useQuery({
    queryKey: ["lists"],
    queryFn: () =>
      listings("rank", "asc", {
        filters: {
          area: undefined,
          marketType: prop ? prop?.listingInformation?.marketType : undefined,
          propertyType: prop
            ? prop?.listingInformation?.propertyType
            : undefined,
          price: {
            min: prop
              ? prop?.listingInformation?.monthlyRent - 10000
              : undefined,
            max: prop
              ? prop?.listingInformation?.monthlyRent + 10000
              : undefined,
          },
          category: prop ? prop?.category : undefined,
        },
      }),
  });

  function capitalizeFirstLetter(word: string) {
    if (!word) return word;
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }

  const router = useRouter();

  function formatDate(dateString: string, options?: DateFormatOptions): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.error("Invalid date string:", dateString);
      return "Invalid Date";
    }

    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const suffixes = ["st", "nd", "rd", "th"];
    const lastDigit = dayOfMonth % 10;
    const suffixIndex =
      lastDigit === 1 ? 0 : lastDigit === 2 ? 1 : lastDigit === 3 ? 2 : 3;

    // Create the formatted date string (adjust month names as needed)
    const monthNames = options?.monthNames || [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedDate = `${dayOfMonth}${suffixes[suffixIndex]} ${monthNames[monthIndex]}, ${year}`;

    return formattedDate;
  }

  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  function formatNumberWithCommas(amount: number): string {
    return new Intl.NumberFormat("en-US").format(amount);
  }

  const handleImageClick = (src: string | StaticImport) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const handlePrevImage = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex((prevIndex: any) =>
        prevIndex === 0
          ? prop.listingInformation.images.length - 1
          : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex((prevIndex: any) =>
        prevIndex === prop.listingInformation.images.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageIndex(null);
  };

  return (
    <div className="bg-white flex  justify-center">
      <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
        <div className="py-[2em]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
            <div className="col-span-2">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4  ">
                <div className="relative h-full">
                  <div
                    className="flex h-full overflow-scroll hide-scroll-indicators"
                    ref={showcaseRef}
                  >
                    {prop &&
                      prop.listingInformation.images.map(
                        (
                          src: string | StaticImport,
                          index: React.Key | null | undefined
                        ) => (
                          <Image
                            key={index}
                            src={src}
                            alt="property picture"
                            width={200}
                            height={200}
                            className="w-full h-full mr-4 cursor-pointer"
                            onClick={() => openModal(index as number)}
                          />
                        )
                      )}
                  </div>
                  <div className="absolute bottom-6 w-full flex gap-2 justify-center">
                    {prop &&
                      prop.listingInformation.images.map(
                        (_: any, index: React.Key | null | undefined) => (
                          <div
                            key={index}
                            className={`h-1 w-6 rounded-md transition-all duration-700 ease-in ${
                              modalImageIndex === index
                                ? "bg-white"
                                : "backdrop-blur bg-white/25"
                            }`}
                          />
                        )
                      )}
                  </div>
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="relative">
                      {modalImageIndex !== null && (
                        <Image
                          src={prop.listingInformation.images[modalImageIndex]}
                          alt="full-screen image"
                          width={400}
                          height={400}
                          className="w-full h-full"
                        />
                      )}
                      <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-secondary rounded-full h-10 flex justify-center items-center w-10 text-white p-2"
                        onClick={handlePrevImage}
                      >
                        &lt;
                      </button>
                      <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-secondary rounded-full h-10 flex justify-center items-center w-10 text-white p-2"
                        onClick={handleNextImage}
                      >
                        &gt;
                      </button>
                    </div>
                  </Modal>
                </div>

                <div className="flex flex-row md:flex-col  gap-2 md:gap-4">
                  {prop && prop.listingInformation.images[1] && (
                    <div className="hover:border h-full  hover:border-secondary hover:p-1 rounded-md duration-300 ease-in-out transition-all ">
                      <Image
                        src={prop && prop.listingInformation.images[1]}
                        width={200}
                        height={200}
                        alt="property picture "
                        className="w-full h-full object-contain rounded-md cursor-pointer"
                      />
                    </div>
                  )}
                  {prop && prop.listingInformation.images[2] && (
                    <div className="hover:border h-full object-contain hover:border-secondary hover:p-1 rounded-md duration-300 ease-in-out transition-all relative ">
                      <Image
                        src={prop && prop.listingInformation.images[2]}
                        width={200}
                        height={200}
                        alt="property picture"
                        className="w-full h-full rounded-md cursor-pointer"
                      />
                      <div></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-2 border-gray-300  rounded-xl px-[2em] py-[1em] mt-[2em] flex items-center justify-start md:justify-between flex-wrap gap-4">
                <Feature
                  icon={<LuBedSingle size={25} />}
                  feature="Bedrooms"
                  tagline={prop && prop.listingInformation.noOfBedrooms}
                />
                <Feature
                  icon={<TbBath size={25} />}
                  feature="Bathrooms"
                  tagline={prop && prop.listingInformation.noOfBaths}
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
                  tagline={prop && prop.listingInformation.squareFeet + "m²"}
                />
                <Feature
                  icon={<FaRegCircleCheck size={22} />}
                  feature="Status"
                  tagline={prop && prop.status === "FREE" ? "Active" : "Inactive"}
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
                  tagline={
                    formatDate(prop && prop.listingInformation.availableDate) ||
                    "12 Feb, 2024"
                  }
                />
              </div>

              <div className="mt-8 border-b border-gray-300 pb-8">
                <p className="text-[24px] font-bold mb-4">About Property</p>
                <p>{prop && prop.listingInformation.description}</p>
              </div>

              <div className="mt-8 border-b border-gray-300 pb-8">
                <p className="text-[24px] font-bold mb-4">Property Features </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {prop &&
                    prop.listingInformation.amenities.map(
                      (item: string, index: any) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaRegCircleCheck size={22} />
                          <p>{item}</p>
                        </div>
                      )
                    )}
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
                  See more listings in {prop && prop.address.city},{" "}
                  {prop && prop.address.state} State
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
                  <p className="text-gray-300 font-medium text-[14px] ">
                    {prop && prop.category === "SALE" ? "Sale" : "Rent"}
                  </p>
                  <p className="text-[20px] md:text-[24px] font-bold">
                    NGN{" "}
                    {formatNumberWithCommas(
                      prop && prop.listingInformation.monthlyRent
                    )}
                    {prop && prop.category !== "SALE" && (
                      <span className="text-[14px] md:text-[18px] font-medium">
                        /Month
                      </span>
                    )}
                  </p>
                </div>

                {prop && prop.category !== "SALE" && (
                  <div className="text-secondary mt-6">
                    <p className="text-[12px] md:text-[16px] font-semibold">
                      DURATION
                    </p>

                    <div className="border-secondary border text-secondary rounded-xl  flex items-center mt-2 ">
                      <select
                        name="duration"
                        className="w-full px-5 py-4 rounded-xl flex-1 focus:outline-none "
                        value={duration}
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                      >
                        <option value="1">Monthly</option>
                        <option value="6">Half a year</option>
                        <option value="12">Yearly</option>
                      </select>
                      <BiChevronDown className="mr-2" size={30} />
                    </div>
                  </div>
                )}

                <div className="my-6 flex items-center justify-between">
                  <p className="text-gray-400 text-[12px] md:text-[16px] font-medium">
                    Service Charge
                  </p>
                  <p className="text-[14px] md:text-[18px] font-medium">
                    NGN 1,500
                  </p>
                </div>
                <div className="my-6 flex items-center justify-between">
                  <p className="text-gray-400 text-[12px] md:text-[16px] font-medium">
                    Refundable security deposit
                  </p>
                  <p className="text-[14px] md:text-[18px] font-medium">
                    NGN{" "}
                    {formatNumberWithCommas(
                      prop && prop.listingInformation.securityDeposit
                    )}
                  </p>
                </div>
                <div className="my-6 flex items-center justify-between">
                  <p className="text-gray-400 text-[12px] md:text-[16px] font-medium">
                    One-time booking fee
                  </p>
                  <p className="text-[14px] md:text-[18px] font-medium">
                    NGN 10,000
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
                    NGN{" "}
                    {formatNumberWithCommas(
                      prop && duration === "1"
                        ? prop.listingInformation.securityDeposit +
                            prop.listingInformation.monthlyRent +
                            10000 +
                            1500
                        : duration === "6"
                        ? (prop.listingInformation.securityDeposit +
                            prop.listingInformation.monthlyRent +
                            1500) *
                            6 +
                          10000
                        : duration === "12"
                        ? (prop.listingInformation.securityDeposit +
                            prop.listingInformation.monthlyRent +
                            1500) *
                            12 +
                          10000
                        : 0
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src={prop && prop.agent.image}
                    height={70}
                    width={70}
                    alt="realtor"
                    className="rounded-full "
                  />

                  <div>
                    <p className="text-[18px] md:text-[24px] font-bold">
                      {prop && capitalizeFirstLetter(prop.agent.name)}
                    </p>
                    <p className=" text-[12px] md:text-[16px] ">
                      {prop && prop.agent.type}
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

                <a
                  href={`https://wa.me/+2347038251085`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-primary py-4 flex justify-center text-white mt-6"
                >
                  <div className="flex items-center gap-4">
                    <FaWhatsapp size={25} />
                    <p>Start a Conversation</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4 md:mb-8 ">
            <div className="flex items-center justify-between my-8">
              <p className="font-semibold text-[25px] md:text-[40px] ">
                Similar Listings
              </p>
              <button
                className="bg-primary px-8 py-3 text-white font-medium  rounded-md"
                onClick={() => router.push("/search")}
              >
                View all listings
              </button>
            </div>

            <div className="flex items-center justify-center flex-wrap flex-col lg:flex-row gap-10">
              {lists &&
                lists.properties.map((list: any) => {
                  return <ListingCard key={list.id} lists={list} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
