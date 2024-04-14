import { NewsLetter } from "@/components/common";
import { PropertyDetails, TopDetails } from "@/components/properties";
import React from "react";

const Page = () => {
  return (
    <div>
      <TopDetails />
      <PropertyDetails />
      <NewsLetter />
    </div>
  );
};

export default Page;
