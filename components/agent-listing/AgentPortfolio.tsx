"use client";
import { useRouter } from "next/navigation";
import { useAPI } from "@/app/lib/useApi";
import { listings } from "@/app/api/UseUser";
import ListingCard from "./ListingCard";

const AgentPortfolio = () => {
   const router = useRouter();
   const { useQuery } = useAPI();

   const { data: lists } = useQuery({
     queryKey: ["lists"],
     queryFn: () =>
       listings("rank", "asc", {
         filters: [],
       }),
   });

  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%]">
        <div className="bg-white  flex justify-center py-[2em] lg:py-[4em] ">
          <div className="w-full">
            <div className="flex items-center lg:items-start justify-center  lg:justify-between ">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Property Portfolio{" "}
              </p>
            </div>

            <div className="mt-[3em] w-full flex items-center gap-10 justify-center flex-wrap">
              {lists &&
                lists.properties &&
                lists.properties.slice(0, 3).map((list: any, i: any) => {
                  return (
                    <ListingCard
                      // propertyId={list.propertyId}
                      // streetAddress={list.streetAddress}
                      // unitNumber={list.unitNumber}
                      // city={list.city}
                      // state={list.state}
                      // zipcode={list.zipcode}
                      lists={list}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPortfolio;
