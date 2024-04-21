import Image from "next/image";

const Activities = () => {
  return (
    <>
      <div className="flex justify-between items-start gap-[24px] mt-[26px] mb-[40px] mx-[32px]">
        <div className="w-[35%] border-[#D9E2E6] border-[2px] rounded-[8px] p-[24px]">
          <div>
            <p className="font-semibold text-[20px] text-black mb-6">
              Activities
            </p>
          </div>

          <div className="flex flex-col items-start gap-[24px]">
            <div className="flex items-start gap-[16px]">
              <Image
                width={40}
                height={40}
                src="/img/sample-avatar.png"
                alt=""
              />
              <div>
                <p className="font-bold text-[#5AA63F] text-[12px] pb-2">
                  NEW PAYMENT
                </p>
                <h2 className="text-[#6C727F] text-[14px] font-medium">
                  <span className="font-bold text-[#000929]">Omar Khan</span>{" "}
                  paid rent invoice ES-3258X{" "}
                </h2>
                <p className="text-[#9EA3AE] mt-2 text-[14px] font-medium">
                  2 mins ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[16px]">
              <Image width={40} height={40} src="/img/remainder.png" alt="" />
              <div>
                <h2 className="text-[#6C727F] text-[14px] font-medium">
                  <span className="font-bold text-[#000929]">
                    Payment reminder
                  </span>{" "}
                  was sent to{" "}
                  <span className="font-bold text-[#000929]">Carlos Mena</span>{" "}
                </h2>
                <p className="text-[#9EA3AE] mt-2 text-[14px] font-medium">
                  Thursday, 16:54 PM
                </p>
              </div>
            </div>{" "}
            <div className="flex items-start gap-[16px]">
              <Image
                width={40}
                height={40}
                src="/img/sample-avatar.png"
                alt=""
              />
              <div>
                <h2 className="text-[#6C727F] text-[14px] font-medium">
                  <span className="font-bold text-[#000929]">Khalid Binh</span>{" "}
                  paid rent invoice ES-3258X
                </h2>
                <p className="text-[#9EA3AE] mt-2 text-[14px] font-medium">
                  Thursday, 16:54 PM
                </p>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="w-[65%] border-[#D9E2E6] border-[2px] rounded-[8px]">
          <div>
            <p className="font-bold text-[20px] text-black p-6">
              Recent Payments
            </p>
          </div>
          <div className="flex flex-col pb-[20px]">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="font-medium border-y-[2px] border-y-[#D9E2E6]">
                      <tr>
                        <th
                          scope="col"
                          className="text-[#6C727F] text-left font-medium px-6 py-4"
                        >
                          Invoice
                        </th>
                        <th
                          scope="col"
                          className="text-[#6C727F] text-left font-medium px-6 py-4"
                        >
                          Due Date
                        </th>
                        <th
                          scope="col"
                          className="text-[#6C727F] text-left font-medium px-6 py-4"
                        >
                          Tenant
                        </th>
                        <th
                          scope="col"
                          className="text-[#6C727F] text-left font-medium px-6 py-4"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="text-[#6C727F] text-left font-medium px-6 py-4"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-[#000929] text-[16px] font-medium">
                        <td className=" text-left whitespace-nowrap px-6 py-2 font-medium">
                          ES-32590
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          Dec 9, 2021
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          <div className="flex justify-start gap-4 items-center">
                            <Image
                              width={28}
                              height={28}
                              src="/img/sample-avatar.png"
                              alt=""
                            />
                            <p>Omar Khan</p>
                          </div>
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          $1,500
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          <button className="text-[15px] font-[600] text-[#F06565] bg-[#FDF7F7] rounded-[4px] py-2 px-4">
                            Overdue
                          </button>
                        </td>
                      </tr>
                      <tr className="text-[#000929] text-[16px] font-medium">
                        <td className=" text-left whitespace-nowrap px-6 py-2 font-medium">
                          ES-32590
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          Dec 9, 2021
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          <div className="flex justify-start gap-4 items-center">
                            <Image
                              width={28}
                              height={28}
                              src="/img/sample-avatar.png"
                              alt=""
                            />
                            <p>Omar Khan</p>
                          </div>
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          $1,500
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          <button className="text-[15px] font-[600] text-[#F06565] bg-[#FDF7F7] rounded-[4px] py-2 px-4">
                            Overdue
                          </button>
                        </td>
                      </tr>
                      <tr className="text-[#000929] text-[16px] font-medium">
                        <td className=" text-left whitespace-nowrap px-6 py-2 font-medium">
                          ES-32590
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          Dec 9, 2021
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          <div className="flex justify-start gap-4 items-center">
                            <Image
                              width={28}
                              height={28}
                              src="/img/sample-avatar.png"
                              alt=""
                            />
                            <p>Omar Khan</p>
                          </div>
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          $1,500
                        </td>
                        <td className=" text-left whitespace-nowrap px-6 py-2">
                          <button className="text-[15px] font-[600] text-[#27AE60] bg-greenBg rounded-[4px] py-2 px-4">
                            Paid
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
