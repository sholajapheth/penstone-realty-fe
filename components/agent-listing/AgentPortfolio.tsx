"use client";
import { useRouter } from "next/navigation";
import { useAPI } from "@/app/lib/useApi";
import { listings } from "@/app/api/UseUser";
import ListingCard from "./ListingCard";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import React, {useEffect, useMemo, useState} from "react";
import {useDeviceType} from "@/hooks/useDeviceType";

const AgentPortfolio = ({data}: any) => {
   const router = useRouter();
   const deviceType = useDeviceType();

    const [currentPage, setCurrentPage] = useState(1);

    function scrollTo(element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }

    const itemsPerPage = useMemo(() => {
        switch (deviceType) {
            case "desktop":
                return 3;
            case "tablet":
                return 2;
            default:
                return 1;
        }
    }, [deviceType])

    const totalItems = data?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data?.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePageClick = (page: number) => {
        setCurrentPage(page)
    }

  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
        <div className="bg-white  flex justify-center py-[2em] lg:py-[4em] ">
          <div className="w-full">
            <div className="flex items-center lg:items-start justify-center  lg:justify-between ">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Property Portfolio{" "}
              </p>
            </div>

              <div className={"flex pt-[4em] w-full items-center justify-center"} id={"listing-box"} >
                  {!currentItems || currentItems.length < 1 && (
                      <div className="font-semibold text-start w-full py-10 text-red-500 text-[20px]">
                          No available listing
                      </div>
                  )}
                  <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"} >
                      {data &&
                          currentItems.map((list: any) => {
                              return <ListingCard key={list.id} lists={list}/>;
                          })}
                  </div>
              </div>
              {/* <PaginationNav /> */}
              <div className="flex items-center justify-center my-[4em]">
                  <div className="font-bold flex items-center gap-4 ">
                      <BiChevronLeft
                          size={28}
                          className={`cursor-pointer ${currentPage <= 1 ? "text-gray-300" : ""}`}
                          onClick={() => {
                              scrollTo("listing-box");
                              setCurrentPage((prev) => Math.max(prev - 1, 1));
                          }}
                      />

                      <div className="flex gap-2 items-center">
                          {Array.from({length: Math.min(totalPages, 5)}, (_, index) => (
                              <button
                                  key={index + 1}
                                  className={`p-4 py-[0.55rem] rounded-full text-white shadow-sm ${
                                      currentPage === index + 1 ? "bg-primary" : "bg-gray-300"
                                  }`}
                                  onClick={() => {
                                      scrollTo("listing-box");
                                      handlePageClick(index + 1);
                                  }}
                              >
                                  {index + 1}
                              </button>
                          ))}
                          {
                              totalPages > 5 && (
                                  <>
                                      {
                                          ((totalPages - 5) > 1) && (
                                              <>
                                                  <p>•</p>
                                                  <p>•</p>
                                                  <p>•</p>
                                              </>
                                          )
                                      }
                                      <button
                                          key={totalPages}
                                          className={`p-4 py-[0.55rem] rounded-full text-white shadow-sm ${
                                              currentPage === totalPages ? "bg-primary" : "bg-gray-300"
                                          }`}
                                          onClick={() => {
                                              scrollTo("listing-box");
                                              handlePageClick(totalPages);
                                          }}
                                      >
                                          {totalPages}
                                      </button>
                                  </>
                              )
                          }
                      </div>

                      <BiChevronRight
                          size={28}
                          className={`cursor-pointer ${currentPage >= totalPages ? "text-gray-300" : ""}`}
                          onClick={() => {
                              scrollTo("listing-box");
                              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                          }
                          }
                      />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPortfolio;
