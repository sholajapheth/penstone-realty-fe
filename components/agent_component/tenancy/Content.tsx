"use client";

import Image from "next/image";
import { useState } from "react";

const Content = () => {
  const [showDetails, setShowDetails] = useState(false);
const [showSSN, setShowSSN] = useState(false);

const handleShowSSN = () => {
    setShowSSN(!showSSN);
}
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <div className="flex justify-between items-start gap-[24px] p-[24px] mb-10">
        {!showDetails ? (
          <div className="w-[70%]">
            <div className="flex justify-between w-full items-center mb-4">
              <div className="relative pl-5">
                <Image
                  src="/img/search.png"
                  width={20}
                  height={20}
                  alt=""
                  className="absolute top-[7px]"
                />
                <input
                  type="search"
                  placeholder="Search tenant by name..."
                  className="border-none pl-8 py-[6px] outline-none"
                />
              </div>
              <div className="flex flex-col items-start gap-2 w-[15%]">
                <select className="border-[2px] rounded-[8px] h-[40px] outline-none px-[16px] w-full">
                  <option value="">Select type</option>
                  <option value="">House</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium border-[#D9E2E6] mx-[10px] rounded-md mb-4">
                          <tr className="bg-[#D9E2E6] rounded-md mb-4 text-[#000929]">
                            <th scope="col" className="px-6 text-[16px] py-4">
                              Applied
                            </th>
                            <th scope="col" className="px-6 text-[16px] py-4">
                              Tenant
                            </th>
                            <th scope="col" className="px-6 text-[16px] py-4">
                              Location
                            </th>
                            <th scope="col" className="px-6 text-[16px] py-4">
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="px-6 text-[16px] py-4"
                            ></th>
                          </tr>
                        </thead>
                        <tbody className="mt-3">
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr className="border-b transition duration-300 ease-in-out border-[#D9E2E6] hover:bg-[#D9E2E6]">
                            <td className="whitespace-nowrap px-6 py-6 font-medium text-[#6C727F]">
                              Dec 9, 11.00 AM
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Valentino Parker
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              Lekki
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                              N230,900
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Image
                                src="/img/detail.png"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex justify-between items-center px-10 py-4">
                        <p className="text-[#000929] text-[14px] font-medium leading-[140%]">
                          1-10 of 57
                        </p>
                        <div className="flex items-center gap-5">
                          <p className="text-[#000929] text-[14px] font-medium leading-[140%]">
                            1 of 6
                          </p>
                          <div className="flex justify-between items-center gap-4">
                            <div className="w-[32px] h-[32px] bg-white rounded-full border-[#E0DEF7] border-[1px] flex justify-center text-center items-center">
                              &lt;
                            </div>
                            <div className="w-[32px] h-[32px] bg-white rounded-full border-[#E0DEF7] border-[1px] flex justify-center text-center items-center">
                              &gt;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[70%]">
            <div className="border-[#D9E2E6] border-[1px] rounded-[8px] px-[24px] py-[32px]">
              <h2 className="mb-[32px] text-[#000929] text-[24px] font-semibold">
                Application Summary
              </h2>

              <div className="border-[#D9E2E6] border-[2px] rounded-[8px] flex justify-between">
                <div className="w-[30%]">
                  <Image
                    src="/img/homeDetail.png"
                    alt=""
                    width={256}
                    height={170}
                    className="rounded-l-[8px] w-full"
                  />
                </div>
                <div className=" bg-detailBg w-[70%]">
                  <div className="p-[24px]">
                    <div className="flex flex-col gap-[16px] items-start">
                      <div className="flex justify-between items-start w-full ">
                        <div className="flex flex-col items-start gap-2">
                          <h2 className="text-[18px] font-semibold">
                            Beverly Springfield
                          </h2>
                          <p className="text-[14px] font-medium text-[#6C727F]">
                            210 US Highway, Highland Lake, FL
                          </p>
                        </div>
                        <div>
                          <button className="flex justify-center items-center py-[10px] px-[16px] bg-white border-[#27AE60] border-[2px] rounded-[8px] gap-2">
                            <Image
                              src="/img/good.png"
                              alt=""
                              width={20}
                              height={20}
                            />
                            <p className="text-[14px] font-medium text-[#27AE60]">
                              Applied Dec 9 , 11:00 AM
                            </p>
                          </button>
                        </div>
                      </div>
                      <div className="bg-[#D9E2E6] w-full h-[1px]"></div>
                      <div className="flex justify-start items-center gap-4">
                        <div className="flex justify-start items-center gap-2">
                          <Image
                            src="/img/bed.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p className="text-[#394150] font-medium text-[14px]">
                            4 beds
                          </p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <Image
                            src="/img/bath.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p className="text-[#394150] font-medium text-[14px]">
                            2 bathrooms
                          </p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <Image
                            src="/img/dimension.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p className="text-[#394150] font-medium text-[14px]">
                            6x7.5 m²
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!showDetails ? (
          <div className="w-[30%]">
            <h2 className="mb-[24px] text-[#000929] text-[20px] font-semibold">
              Tenant detail view
            </h2>

            <div className="p-5 border-[#D9E2E6] border-[1px] rounded-[8px]">
              <div className="flex justify-start items-center gap-[24px] text-[#000929]">
                <Image
                  src="/img/sample-avatar.png"
                  alt=""
                  width={72}
                  height={72}
                />
                <div className="flex justify-between items-start gap-1 flex-col">
                  <h2 className="text-[20px] font-medium">Manuel Villa</h2>
                  <p className="text-[18px] font-medium text-[#6C727F]">
                    Tenants
                  </p>
                </div>
              </div>

              <div className="bg-[#D9E2E6] h-[1px] w-full mt-[33px] mb-[16px]"></div>

              <div className="flex justify-between items-center">
                <p className="font-medium text-[16px] text-[#6C727F]">
                  Applied
                </p>
                <p className="font-medium text-[16px]">Jun 9, 11.00 AM</p>
              </div>
              <div className="bg-[#D9E2E6] h-[1px] w-full my-[16px]"></div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-[16px] text-[#6C727F]">
                  Occupants
                </p>
                <p className="font-medium text-[16px]">1 person</p>
              </div>

              <div className="bg-[#D9E2E6] h-[1px] w-full my-[16px]"></div>

              <div className="flex flex-col items-start gap-[16px]">
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium text-[16px] text-[#6C727F]">
                    Details
                  </p>
                  <p className="font-medium text-[16px]"></p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium text-[16px] text-[#6C727F]">
                    Email
                  </p>
                  <p className="font-medium text-[16px]">
                    manuelvilla@gmail.com
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium text-[16px] text-[#6C727F]">
                    Phone Number
                  </p>
                  <p className="font-medium text-[16px]">202-555-0159</p>
                </div>
              </div>

              <button
                className="mt-[32px] text-white bg-secondary text-center w-full py-[12px] font-semibold rounded-[8px]"
                onClick={handleShowDetails}
              >
                View Application
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[30%]">
            <div className="flex justify-between items-center gap-[24px] mb-[24px]">
              <button className="bg-secondary text-white py-[14px] text-[16px] font-semibold rounded-[8px] w-[198px] gap-1 flex justify-center items-center">
                <Image src="/img/whiteTick.png" alt="" width={20} height={20} />
                <p>Accept</p>
              </button>
              <button className="bg-white text-[#F06565] border-[#F06565] border-[2px] py-[14px] text-[16px] font-semibold rounded-[8px] w-[198px] gap-1 flex justify-center items-center">
                <Image src="/img/reject.png" alt="" width={20} height={20} />
                <p>Reject</p>
              </button>
            </div>

            <div className="pt-5 border-[#D9E2E6] border-[1px] rounded-[8px]">
              <div className="flex justify-center mt-[24px] flex-col items-center gap-[24px] text-[#000929]">
                <Image
                  src="/img/sample-avatar.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="flex justify-between items-center gap-1 flex-col">
                  <h2 className="text-[20px] font-semibold">Manuel Villa</h2>
                  <p className="text-[18px] font-medium text-[#6C727F]">
                    Albany, NY
                  </p>
                </div>
              </div>

              <div className="px-5 pt-[32px]">
                <div className="flex bg-btnBg w-full justify-between items-center rounded-[8px] py-[14px] px-[16px]">
                  <p className="text-[#000929] text-[14px] font-medium">
                    518 {!showSSN ? <span>** ****</span> : <span>45 1234</span>}
                  </p>
                  <p
                    className="font-bold text-[14px] text-secondary cursor-pointer"
                    onClick={handleShowSSN}
                  >
                    Show SSN
                  </p>
                </div>
              </div>

              <div className="px-5">
                <div className="bg-[#D9E2E6] h-[1px] w-full mt-[33px] mb-[16px]"></div>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-[16px] text-[#6C727F]">
                    Date of birth
                  </p>
                  <p className="font-medium text-[16px]">09-05-1985</p>
                </div>
                <div className="bg-[#D9E2E6] h-[1px] w-full my-[16px]"></div>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-[16px] text-[#6C727F]">Age</p>
                  <p className="font-medium text-[16px]">36 years old</p>
                </div>
                <div className="bg-[#D9E2E6] h-[1px] w-full my-[16px]"></div>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-[16px] text-[#6C727F]">
                    Email
                  </p>
                  <p className="font-medium text-[16px]">
                    manuelvilla@gmail.com
                  </p>
                </div>
                <div className="bg-[#D9E2E6] h-[1px] w-full my-[16px]"></div>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-[16px] text-[#6C727F]">
                    Phone Number
                  </p>
                  <p className="font-medium text-[16px]">202-555-0159</p>
                </div>
                <div className="bg-[#D9E2E6] h-[1px] w-full mt-[16px]"></div>
              </div>

              <div className="bg-btnBg px-5 flex justify-center items-center py-[32px]">
                <button
                  className="text-white bg-secondary text-center w-full py-[12px] font-semibold rounded-[8px] flex justify-center items-center gap-2"
                  onClick={handleShowDetails}
                >
                  <Image src="/img/email.png" alt="" width={20} height={20} />
                  Email Applicant
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
