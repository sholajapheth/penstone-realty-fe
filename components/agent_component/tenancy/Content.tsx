import Image from "next/image";

const Content = () => {
  return (
    <>
      <div className="flex justify-between items-start gap-[24px] p-[24px] mb-6">
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
              <p className="font-medium text-[16px] text-[#6C727F]">Applied</p>
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
                <p className="font-medium text-[16px] text-[#6C727F]">Email</p>
                <p className="font-medium text-[16px]">manuelvilla@gmail.com</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="font-medium text-[16px] text-[#6C727F]">
                  Phone Number
                </p>
                <p className="font-medium text-[16px]">202-555-0159</p>
              </div>
            </div>

            <button className="mt-[32px] text-white bg-secondary text-center w-full py-[12px] font-semibold rounded-[8px]">
                View Application
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
