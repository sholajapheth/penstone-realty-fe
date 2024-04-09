import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";

const ShowcardCard = ({ imgSource, title, tagline }: Info3Card) => (
  <div className="bg-[#E6E6E6] relative rounded-[3em] p-8 flex flex-col  justify-between">
    <div className="flex ">
      <div className="p-4 px-[1.18rem] rounded-full bg-white  shadow-sm">
        <Image src={imgSource} height={40} width={40} alt="home-check-icon" />
      </div>
    </div>

    <div className="">
      <p className="font-semibold text-[24px]">{title}</p>
      <p className="mt-2 leading-[1.5em]">{tagline}</p>
    </div>
  </div>
);

const Showcase = () => {
  return (
    <div className="min-h-screen py-[8em] bg-secondary flex items-center justify-center">
      <div className="grid grid-cols-3 w-[80%] text-secondary gap-8">
        <div className="bg-[#E6E6E6] relative rounded-[3em] p-8 col-span-2">
          <div className="bg-[url('/img/showcase-card-bg.png')] absolute w-full inset-0 " />

          <div className="text-secondary ">
            <p className=" ">OUR OFFERINGS</p>
            <p className="text-[36px] font-semibold my-4">
              Pentstone offering comprehensive support for seamless property
              transactions and investments.
            </p>
            <button className="bg-primary text-white pl-4 p-2  rounded-2xl flex  items-center gap-4 ">
              <p>See all services</p>

              <div className="p-2 rounded-md bg-white text-primary">
                <IoChevronForward />
              </div>
            </button>
          </div>
        </div>

        <ShowcardCard
          imgSource="/img/icons/home-check.png"
          title="Architectural design"
          tagline=" Craft your ideal personalize space with our expert architectural design
        services."
        />
        <ShowcardCard
          imgSource="/img/icons/construction.png"
          title="Construction services"
          tagline="Boost your property&apos;s value with our construction management and renovation expertise."
        />
        <ShowcardCard
          imgSource="/img/icons/marketing.png"
          title="Marketing support"
          tagline="Increase your property visibility with our targeted marketing  assistance."
        />
        <ShowcardCard
          imgSource="/img/icons/solutions.png"
          title="Specialized solutions"
          tagline="Connect directly with our team of friendly, personalized property assistants."
        />
      </div>
    </div>
  );
};

export default Showcase;