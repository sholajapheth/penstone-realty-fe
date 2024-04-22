import Image from "next/image";

const Request = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-start">
        <div className="bg-[#D9E2E6] h-[1px] w-full"></div>
        <div className="flex flex-col gap-3 items-start px-[50px]">
          <p className="text-[14px] font-medium text-[#00080B]">
            Total Applicants
          </p>
          <div className="flex justify-start items-center gap-2">
            <h2 className="text-[32px] font-bold text-[#00080B]">394</h2>
            <div className="text-[14px] text-[#27AE60] bg-greenBg rounded-[12px] py-[6px] px-[10px]">
              +7.1% from last month
            </div>
          </div>
        </div>
        <div className="bg-[#D9E2E6] h-[1px] w-full"></div>
      </div>

      <div className="px-[50px]">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium border-[#D9E2E6] mx-[10px] rounded-md mb-4">
                    <tr className="rounded-md font-medium mb-4 text-[#000929]">
                      <th
                        scope="col"
                        className="px-6 font-medium text-[14px] py-4"
                      >
                        Tenant
                      </th>
                      <th
                        scope="col"
                        className="px-6 font-medium text-[14px] py-4"
                      >
                        Income
                      </th>
                      <th
                        scope="col"
                        className="px-6 font-medium text-[14px] py-4"
                      >
                        Applied
                      </th>
                      <th
                        scope="col"
                        className="px-6 font-medium text-[14px] py-4"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="mt-3">
                    <tr className="border-b transition duration-300 ease-in-out h">
                      <td className="whitespace-nowrap px-6 py-6 font-medium ">
                        <div className="flex justify-start gap-2 items-center">
                          <Image
                            src="/img/sample-avatar.png"
                            width={48}
                            height={48}
                            alt=""
                          />
                          <div className="flex flex-col items-start gap-1">
                            <h2 className="text-[16px] font-medium text-[#00080B]">
                              Valentino Parker
                            </h2>
                            <p className="text-[#6C727F] text-[14px]">
                              Portland, OR
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                        <div className="flex flex-col items-start gap-1">
                          <h2 className="text-[16px] font-medium text-[#00080B]">
                            $5,000/mo
                          </h2>
                          <p className="text-[#6C727F] text-[14px]">
                            2.5X Income to Rent
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                        9 Dec 2021, 11.00 AM
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
                    <tr className="border-b transition duration-300 ease-in-out h">
                      <td className="whitespace-nowrap px-6 py-6 font-medium ">
                        <div className="flex justify-start gap-2 items-center">
                          <Image
                            src="/img/sample-avatar.png"
                            width={48}
                            height={48}
                            alt=""
                          />
                          <div className="flex flex-col items-start gap-1">
                            <h2 className="text-[16px] font-medium text-[#00080B]">
                              Valentino Parker
                            </h2>
                            <p className="text-[#6C727F] text-[14px]">
                              Portland, OR
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                        <div className="flex flex-col items-start gap-1">
                          <h2 className="text-[16px] font-medium text-[#00080B]">
                            $5,000/mo
                          </h2>
                          <p className="text-[#6C727F] text-[14px]">
                            2.5X Income to Rent
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                        9 Dec 2021, 11.00 AM
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
                    <tr className="border-b transition duration-300 ease-in-out h">
                      <td className="whitespace-nowrap px-6 py-6 font-medium ">
                        <div className="flex justify-start gap-2 items-center">
                          <Image
                            src="/img/sample-avatar.png"
                            width={48}
                            height={48}
                            alt=""
                          />
                          <div className="flex flex-col items-start gap-1">
                            <h2 className="text-[16px] font-medium text-[#00080B]">
                              Valentino Parker
                            </h2>
                            <p className="text-[#6C727F] text-[14px]">
                              Portland, OR
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                        <div className="flex flex-col items-start gap-1">
                          <h2 className="text-[16px] font-medium text-[#00080B]">
                            $5,000/mo
                          </h2>
                          <p className="text-[#6C727F] text-[14px]">
                            2.5X Income to Rent
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#000929]">
                        9 Dec 2021, 11.00 AM
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
