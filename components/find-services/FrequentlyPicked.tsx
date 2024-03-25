import Image from "next/image";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FrequentlyPickedCard = ({
  dark = false,
  imgSrc,
  dets,
  title,
}: {
  dark: boolean;
  imgSrc: string;
  dets: string;
  title: string;
}) => {
  return (
    <div
      className={`rounded-xl p-8 flex flex-col text-center gap-4 items-center justify-center py-14  group ${
        dark
          ? "bg-secondary text-white"
          : "bg-white text-secondary border border-secondary"
      }`}
    >
      <Image
        src={imgSrc}
        alt={title}
        height={100}
        width={100}
        className="w-[80%] aspect-auto group-hover:scale-110 pri-anim"
      />

      <p className="text-[28px] font-bold mt-4">{title}</p>
      <p>{dets}</p>
    </div>
  );
};

const freqPicked = [
  {
    imgSrc: "/img/constMan.png",
    title: "Construction Managment",
    dets: "Whatever the type and wherever the property, Pentstone experts can help to manage it.",
    dark: false,
  },
  {
    imgSrc: "/img/sellProp.png",
    title: "Sell your Property",
    dets: "Our team of experts provide commercial, residential and rural property valuations to banks and building societies",
    dark: true,
  },
  {
    imgSrc: "/img/spaceMan.png",
    title: "Space Management",
    dets: "With an 800-strong network of development experts we are able to tailor our services to each and every client.",
    dark: false,
  },
];

const FrequentlyPicked = () => {
  return (
    <div className="px-[1em] md:px-[6em] mb-4">
      <div className="flex items-center justify-between my-8">
        <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
          Frequently picked
        </p>
        <div className="flex gap-4">
          <button className="rounded-md bg-primary p-2  ">
            <BiChevronLeft color="white" size={30} />
          </button>
          <button className="rounded-md bg-gray-200 p-2 text-primary  ">
            <BiChevronRight size={30} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {freqPicked.map((item, index) => (
          <FrequentlyPickedCard
            title={item.title}
            imgSrc={item.imgSrc}
            dets={item.dets}
            dark={item.dark}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyPicked;
