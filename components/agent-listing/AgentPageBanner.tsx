"use client";
import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {capitalize} from "@/app/lib/helpers";
import {FaWhatsapp} from "react-icons/fa6";

const AgentPageBanner = ({data}: any) => {
    const router = useRouter();

    return (
        <div className="text-secondary">
            <div className="flex justify-center bg-[#F5FCFF] w-full mb-[40px]">
                <div
                    className="w-[90%] lg:w-[85%] max-w-[1200px] cursor-pointer"
                    onClick={() => router.back()}
                >
                    <div className="flex justify-start gap-2 items-center w-full py-[20px] lg:py-[36px] ">
                        <Image
                            quality={100}
                            unoptimized={true}
                            src="/img/icons/Icon.svg"
                            width={20}
                            height={20}
                            alt=""
                        />
                        <p className="font-semibold text-[18px]  text-secondary">
                            Back to Agents
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
                    <div className="flex justify-between flex-col lg:flex-row items-start gap-[25px] pb-[20px]">
                        <div className="flex flex-col gap-[40px] lg:w-[50%] py-[24px]">
                            <div className="flex w-full flex-col lg:flex-row lg:justify-start items-center gap-4">
                                <div className="relative">
                                    <div className={"rounded-full overflow-hidden w-[7em] h-[7em]"}>
                                        <img
                                            src={data?.image || "/img/agent_1.png"}
                                            alt={"agent image"}
                                            className="group-hover:scale-110 pri-anim bg-cover bg-center bg-no-repeat w-full h-full"
                                        />
                                    </div>
                                    <Image
                                        quality={100}
                                        unoptimized={true}
                                        src="/img/icons/Auto Layout Horizontal.svg"
                                        alt="agent-img"
                                        height={30}
                                        width={30}
                                        className="group-hover:scale-110 pri-anim absolute left-[70%] top-[84%]"
                                    />
                                </div>
                                <div className="flex flex-col items-center lg:items-start gap-1">
                                    <h2 className="text-center lg:text-start text-[1.5em] lg:text-[2em] text-[#2A2A2A] font-bold">
                                        {capitalize(data?.name)}
                                    </h2>
                                    <p className="text-center lg:text-start text-[18px] text-[#414141] ">
                                        {data?.jobTitle || "Pentstone Agent"}
                                    </p>
                                    {/*<div className="flex justify-start items-center gap-[8px] text-[14px] text-[#5A5A5A]">*/}
                                    {/*    <div className="w-[20px] h-[20px] bg-[#01C901] rounded-full"></div>*/}
                                    {/*    {" "}*/}
                                    {/*    Online*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[24px] text-[#2A2A2A] font-semibold">
                                    About {capitalize(data?.name?.split(" ")[0])}
                                </h2>
                                <p className="text-black font-medium leading-[150%]">
                                    {data?.about}
                                </p>
                                <p className="text-[#034159] pt-[32px] font-medium">
                                    <span className="font-semibold">Specialties</span>: {data?.specialities}
                                </p>
                            </div>
                            {/*<Image*/}
                            {/*    quality={100}*/}
                            {/*    unoptimized={true}*/}
                            {/*    src="/img/linkedInn.svg"*/}
                            {/*    width={20}*/}
                            {/*    height={20}*/}
                            {/*    alt=""*/}
                            {/*/>*/}
                        </div>

                        <div className="border-[1px] border-[#D9E2E6] rounded-[14px] lg:w-[40%] py-[24px] px-[20px]">
                            <div className="flex justify-center items-center pb-[40px]">
                                <Image
                                    quality={100}
                                    unoptimized={true}
                                    src="/img/icons/quote.svg"
                                    width={25}
                                    height={25}
                                    alt=""
                                />
                            </div>
                            <p className="text-[20px] text-center px-[10px] lg:px-[50px] pb-[24px] text-black font-medium">
                                {data?.catchPhrase}
                            </p>

                            <div className="w-full h-[1px] bg-black opacity-10 mb-[30px]"></div>

                            <div className="w-full">
                                <h2 className="font-semibold text-[24px] text-[#2A2A2A] pb-[22px]">
                                    Professional Information
                                </h2>

                                <div className="flex gap-[26px] flex-col">
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-[#000929] text-nowrap">Service Areas:</p>
                                        <p className="text-[18px] font-medium text-black text-end">
                                            {data?.serviceArea}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-[#000929] text-nowrap">Cell Phone:</p>
                                        <p className="text-[18px] font-medium text-black text-end">
                                            {data?.phoneNumber}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-[#000929] text-nowrap">Email:</p>
                                        <p className="text-[18px] font-medium text-black text-end">
                                            {data?.email}
                                        </p>
                                    </div>

                                    {
                                        (data?.whatsappNumber || data?.phoneNumber) && (
                                            <a
                                                href={`https://wa.me/${data?.whatsappNumber || data?.phoneNumber}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full rounded-xl bg-primary py-4 flex justify-center text-white mt-6"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <FaWhatsapp size={25}/>
                                                    <p>Start a Conversation</p>
                                                </div>
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentPageBanner;
