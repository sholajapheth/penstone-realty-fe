import { NewsLetter } from "@/components/common";
import { HeroSection, Search } from "@/components/properties";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="lg:hidden">
        <HeroSection />
      </div>
      <Search />
      <div className="hidden lg:block">
        <HeroSection />
      </div>
      <NewsLetter />
    </div>
  );
};

export default Page;
