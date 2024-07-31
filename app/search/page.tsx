import { NewsLetter } from "@/components/common";
import { HeroSection, Search } from "@/components/properties";
import React from "react";

const Page = () => {
  return (
    <div>
      <Search />
      <div className="">
        <HeroSection />
      </div>
      <NewsLetter />
    </div>
  );
};

export default Page;
