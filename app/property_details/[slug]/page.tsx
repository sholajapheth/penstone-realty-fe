"use client"

import { NewsLetter } from "@/components/common";
import { PropertyDetails, TopDetails } from "@/components/properties";
import React, {useEffect} from "react";
import { useAPI } from "@/app/lib/useApi";
import { singleList } from "@/app/api/UseUser";

const Page = ({ params }: { params: { slug: string } }) => {
  const { useQuery } = useAPI();

  const { data: property } = useQuery({
    queryKey: ["property"],
    queryFn: () =>
      singleList(params.slug),
  });

  return (
    <div>
        {
            property && (
                <>
                    <TopDetails property={property} />
                    <PropertyDetails property={property} />
                </>
            )
        }
      <NewsLetter />
    </div>
  );
};

export default Page;
