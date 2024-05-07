"use client"

import { NewsLetter } from "@/components/common";
import { PropertyDetails, TopDetails } from "@/components/properties";
import React from "react";
import { useAPI } from "@/app/lib/useApi";
import { singleList } from "@/app/api/UseUser";

const Page = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug)
  const { useQuery } = useAPI();
  const { data: property } = useQuery({
    queryKey: ["property"],
    queryFn: () =>
      singleList(params.slug),
  });

  console.log(property)

  return (
    <div>
      <TopDetails property={property && property} />
      <PropertyDetails property={property && property} />
      <NewsLetter />
    </div>
  );
};

export default Page;
