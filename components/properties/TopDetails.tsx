"use client";

import React from "react";
import {BiChevronLeft} from "react-icons/bi";
import {BsCheck, BsSave} from "react-icons/bs";
import {FcDocument} from "react-icons/fc";
import {GrDocumentPdf} from "react-icons/gr";
import {useRouter} from "next/navigation";
import useLocalStorage from "@/app/api/useLocalStorage";

type PropertyProp = {
    property: string[] | any;
};
const TopDetails = ({property}: PropertyProp) => {
    const {getItem, setItem} = useLocalStorage();

    const router = useRouter();
    // const { id } = router.query;
    const prop = property && property?.property;
    return (
        <div className="w-full flex bg-[#F5FCFF] items-center justify-center">
            <div className="w-[85%] max-w-[1200px]">
                <div className="gap-2 py-[2em] flex gap-8 items-start w-full lg:items-center flex-col lg:flex-row">
                    <div className=" flex-1 flex flex-col gp-y-3 lg:gap-y-4">
                        <button
                            className="text-secondary font-semibold flex items-center "
                            onClick={() => router.back()}
                        >
                            <BiChevronLeft size={30}/>
                            <p>Back to Search</p>
                        </button>

                        <p className="font-semibold text-[32px] md:text-[40px] ">
                            {prop && prop?.address?.streetAddress}
                        </p>
                        <p className="text-[16px] text-[#000929] md:text-[20px] font-medium w-full lg:w-[80%]">
                            {prop && prop.address.streetAddress}, {prop && prop.address.city}{" "}
                            {prop && prop.address.state} State
                        </p>

                        {
                            prop?.managedBy === "PENTSTONE" && (
                                <div className="flex">
                                    <div className="rounded-2xl bg-[#13718A] px-4 py-1 gap-2 mt-3 text-white flex items-center ">
                                        <p className="text-sm">
                                            Managed by Pentstone
                                        </p>
                                        <BsCheck color="white" size={25}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <button
                        className="px-[3em] py-3 text-white font-medium bg-secondary rounded-md flex items-center gap-x-4 "
                        onClick={() => {
                            setItem("id", prop && prop.id);
                            setItem("title", prop && prop.address.streetAddress);
                            router.push("/apply");
                        }}
                    >
                        <BsSave/>
                        <p>Apply</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopDetails;
