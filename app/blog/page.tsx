import { BlogBody, BlogTop } from "@/components/blog";
import { NewsLetter } from "@/components/common";
import { PropertyDetails, TopDetails } from "@/components/properties";
import React from "react";

const Page = () => {
  return (
    <div>
      <BlogTop />
      <BlogBody />
      <NewsLetter />
    </div>
  );
};

export default Page;
