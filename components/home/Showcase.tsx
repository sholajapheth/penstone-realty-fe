"use client"
import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { useRouter } from "next/navigation";

const ShowcardCard = ({ imgSource, title, tagline, route }: Info3Card) => {
        const router = useRouter();

  return (
    <div
      className="bg-[#E6E6E6] relative rounded-[3em] p-6 lg:p-8 flex flex-col  justify-between cursor-pointer items-start"
      onClick={() => router.push(`${route}`)}
    >
      <div className="flex ">
        <div className="py-2 lg:py-4">
          <Image
            quality={100}
            unoptimized={true}
            src={imgSource}
            height={80}
            width={80}
            alt="home-check-icon"
          />
        </div>
      </div>

      <div className="pt-[24px] lg:pt-[32px]">
        <p className="font-semibold text-[24px]">{title}</p>
        <p className="mt-4 lg:mt-2 leading-[1.5em] pr-5 ">{tagline}</p>
      </div>
    </div>
  );
};

const Showcase = () => {
      const router = useRouter();

  return (
    <div
      className="lg:px-[140px] py-[25px] lg:py-[8em] bg-secondary flex flex-col lg:flex-row items-center justify-center"
      id="offering"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 text-secondary w-[80%] lg:w-full gap-8  max-w-[1100px]">
        <div className="bg-[#ffffff] relative rounded-[3em] p-8 lg:col-span-2 z-10">
          <div className="bg-[url('/img/showcase-card-bg.png')] bg-no-repeat  lg:bg-position-r-[50px] right-0 absolute w-full inset-0 z-40" />

          <div className="text-secondary z-40 relative">
            <p className=" ">OUR OFFERINGS</p>
            <p className="text-[20px] lg:text-[36px] font-semibold my-4">
              Pentstone offering comprehensive support for seamless property
              transactions and investments.
            </p>
            <button
              className="bg-primary text-white pl-4 p-2 rounded-2xl flex  items-center gap-4"
              onClick={() => router.push("/find_services")}
            >
              <p>See all services</p>

              <div className="p-2 rounded-md bg-white text-primary">
                <IoChevronForward />
              </div>
            </button>
          </div>
        </div>

        <ShowcardCard
          route="/architecture"
          imgSource="/img/icons/home-check.png"
          title="Architectural design"
          tagline=" Craft your ideal personalize space with our expert architectural design
        services."
        />
        <ShowcardCard
          route="/construction"
          imgSource="/img/icons/construction.png"
          title="Construction services"
          tagline="Boost your property's value with our construction management and renovation expertise."
        />
        <ShowcardCard
          route="/sell"
          imgSource="/img/icons/marketing.png"
          title="Marketing support"
          tagline="Increase your property visibility with our targeted marketing  assistance."
        />
        <ShowcardCard
          route="/specialized_service"
          imgSource="/img/icons/solutions.png"
          title="Specialized solutions"
          tagline="Connect directly with our team of friendly, personalized property assistants."
        />
      </div>
    </div>
  );
};

export default Showcase;