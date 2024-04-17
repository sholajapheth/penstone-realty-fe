"use client";

import Image from "next/image";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";

const FrequentlyPickedCard = ({
  dark = false,
  imgSrc,
  dets,
  title,
  route
}: {
  dark: boolean;
  imgSrc: string;
  dets: string;
  title: string;
  route: string;
}) => {
  const router = useRouter();

  return (
    <div
      className={`rounded-xl p-8 flex flex-col text-center gap-4 items-center justify-center py-14  group ${
        dark
          ? "bg-secondary text-white"
          : "bg-white text-secondary border border-secondary"
      }`}
      onClick={() => router.push(`${route}`)}
    >
      <Image
        src={imgSrc}
        alt={title}
        height={200}
        width={200}
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
    route: "/construction",
  },
  {
    imgSrc: "/img/sellProp.png",
    title: "Sell your Property",
    dets: "Our team of experts provide commercial, residential and rural property valuations to banks and building societies",
    dark: true,
    route: "/sell",
  },
  {
    imgSrc: "/img/spaceMan.png",
    title: "Space Management",
    dets: "With an 800-strong network of development experts we are able to tailor our services to each and every client.",
    dark: false,
    route: "/request_form",
  },
];

const FrequentlyPicked = () => {
  return (
    <div className="bg-white flex  justify-center mb-8 pt-[4em] lg:pt-[6em]">
      <div className="w-[90%] lg:w-[85%]">
        <div className="flex items-center justify-between mb-8">
          <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
            Frequently picked
          </p>
          <div className="hidden lg:flex gap-4">
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
              route={item.route}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyPicked;
