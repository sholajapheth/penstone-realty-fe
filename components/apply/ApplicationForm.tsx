"use client";
import { useEffect, useState } from "react";
import GoogleSIgnIn from "../GoogleSIgnIn";
import { userApply } from "@/app/api/UseUser";
import { useAPI } from "@/app/lib/useApi";
import { useAppToast } from "@/app/lib/useAppToast";
import Cookies from "js-cookie";
import useLocalStorage from "@/app/api/dtos/useLocalStorage";

const ApplicationForm = () => {
  const { useAPIMutation } = useAPI();
  const toast = useAppToast();

  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

    const { getItem } = useLocalStorage();


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState<string | undefined>('');
  const [monthlyRentBudget, setMonthlyRentBudget] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [employmentDuration, setEmploymentDuration] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [emergencyContactAddress, setEmergencyContactAddress] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [numberOfOccupants, setNumberOfOccupants] = useState("");

  // const [propertyId, setPropertyId] = useState<string | null>(" ");
  const [intentionOfUse, setIntentionOfUse] = useState("");
  const [moveInDate, setMoveInDate] = useState<string | undefined>('');

  const token = Cookies.get("jwtToken");
  const user = Cookies.get("user");


  const update = useAPIMutation({
    mutationFunction: (x: any) => userApply(x.data, token ? token : "token"),
    onSuccessFn: (data) => {
      setLoading(false);
      // console.log(data)
      // if (data?.statusCode === 200 || data?.statusCode === 201) {
        toast({
          status: "success",
          description: data.message || "Application Successful",
        });
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setEmail('')
        setAddress('')
        setDateOfBirth('')
        setMonthlyRentBudget('')
        setEmployerName('')
        setEmployerAddress('')
        setEmploymentDuration('')
        setAnnualIncome('')
        setEmergencyContactAddress('')
        setEmergencyContactName('')
        setNumberOfOccupants('')
        setIntentionOfUse('')
        setMoveInDate('')
      // }
    },
  });
 const propertyId = getItem('id')
 const title = getItem('title')

  function onSubmit(e: { preventDefault: () => void }) {
    if (!user) {
      setAuth(true);
    }
    const individual = JSON.parse(user as string);
    console.log(individual)
    const userEmail = user ? individual?.email : "";
    e.preventDefault();
    setLoading(true);
    update.mutate({
      data: {
      propertyId: JSON.parse(propertyId as string),
        intentionOfUse,
        moveInDate: moveInDate,
        contactInformation: {
          firstName,
          lastName,
          phoneNumber,
          email,
          address,
          countryCode
        },
        personalInformation: {
          dateOfBirth: dateOfBirth,
          monthlyRentBudget,
          employerName,
          employerAddress,
          employmentDuration,
          annualIncome,
          emergencyContactAddress,
          emergencyContactName,
          numberOfOccupants: parseInt(numberOfOccupants),
          userEmail,
        },
      },
    });
  }

  return (
    <>
      {auth && <GoogleSIgnIn />}
      <div className="bg-white flex  justify-center">
        <div className="w-[90%] lg:w-[85%]">
          <div className="bg-white flex justify-start flex-col py-[2em] lg:py-[4em] text-secondary w-full">
            <div className="flex flex-col items-start gap-[24px] w-full">
              <h1 className="text-[36px] font-semibold">Residential</h1>
              <div className="w-full h-[1px] bg-secondary"></div>
              <p className="text-[24px] font-medium">Single Applicant Form</p>
            </div>

            <form className="text-[16px] py-[58px] flex flex-col gap-[20px]">
              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Select a Property{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={title ? (title as string) : "Name"}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Intended use of property{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <select
                  required
                  className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={intentionOfUse}
                  onChange={(e) => setIntentionOfUse(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select intention
                  </option>
                  <option value="RENT">Rent</option>
                  <option value="SELL">Sell</option>
                </select>
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">Requested Move in Date:</label>
                <input
                  type="date"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-[200px]"
                  onChange={(e) => {
                    setMoveInDate(e.target.valueAsDate?.toISOString());
                  }}
                />
              </div>
            </form>

            <div className="flex flex-col items-start gap-[24px] w-full">
              <p className="text-[24px] font-medium">Contact Information</p>
              <div className="w-full h-[1px] bg-secondary"></div>
            </div>
            <form className="text-[16px] py-[58px] flex flex-col gap-[20px]">
              <div className="flex justify-between items-center gap-[20px] lg:gap-[50px]">
                <div className="flex flex-col items-start gap-2 w-[50%]">
                  <label className="font-medium">
                    First Name <span className="text-[14px]">(Required)</span>{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-2 w-[50%]">
                  <label className="font-medium">
                    Last Name <span className="text-[14px]">(Required)</span>{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Phone Number <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="tel"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Email <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="email"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Address <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </form>

            <div className="flex flex-col items-start gap-[24px] w-full">
              <p className="text-[24px] font-medium">Personal Information</p>
              <div className="w-full h-[1px] bg-secondary"></div>
            </div>
            <form className="text-[16px] pt-[58px] pb-[20px] flex flex-col gap-[20px]">
              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">Date of Birth:</label>
                <input
                  type="date"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-[200px]"
                  onChange={(e) =>
                    setDateOfBirth(e.target.valueAsDate?.toISOString())
                  }
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Monthly Rent Budget{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="number"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={monthlyRentBudget}
                  onChange={(e) => setMonthlyRentBudget(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Employer Name <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={employerName}
                  onChange={(e) => setEmployerName(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Employer Address{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={employerAddress}
                  onChange={(e) => setEmployerAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Length of Employment{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={employmentDuration}
                  onChange={(e) => setEmploymentDuration(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Annual Income <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="number"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Emergency Contact Name:{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={emergencyContactName}
                  onChange={(e) => setEmergencyContactName(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Emergency Contact Address:{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={emergencyContactAddress}
                  onChange={(e) => setEmergencyContactAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  How many people will be living in the home?
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={numberOfOccupants}
                  onChange={(e) => setNumberOfOccupants(e.target.value)}
                />
              </div>
            </form>

            <div className="flex flex-col items-start gap-[18px] pb-[2em]">
              <p className="font-medium">
                I warrant this application and the contents to be true,
                accurate, and complete. By clicking SUBMIT, I confirm that I
                have been made aware of the RESIDENT SELECTION CRITERIA, and
                authorize United Property Group and the credit
                reporting/screening agencies to investigate my character, verify
                my credit, and verify the accuracy of all information recorded
                above. I understand that any false statements,
                misrepresentations, inaccurate information, or failure to supply
                the data requested, will be grounds for disapproval of my
                application. I understand that the application fee I submit with
                my application is non-refundable.
              </p>
              <div className="flex justify-start items-center gap-[10px]">
                <input type="checkbox" name="" id="check" />
                <label htmlFor="check">Yes</label>
              </div>
              <p className="font-medium">
                PLEASE NOTE, BY CLICKING SUBMIT YOU AGREE AND ACKNOWLEDGE THAT
                THE INFORMATION YOU&apos;VE SUPPLIED WILL BE USED TO CONDUCT A
                BACKGROUND INVESTIGATION, INCLUDING CREDIT, CRIMINAL, AND
                EVICTION CHECKS
              </p>
            </div>
            {auth && (
              <p className="text-center text-[14px] text-red-500">
                Please sign up before submitting
              </p>
            )}
            <div className="flex justify-center lg:justify-start">
              <button
                className={` disabled:bg-primary/40 disabled:cursor-not-allowed bg-primary text-white font-semibold flex justify-center items-center gap-2 py-3 rounded-xl px-8 w-full lg:w-[20%]`}
                onClick={(e) => onSubmit(e)}
                disabled={loading}
              >
                {loading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="2.8"
                      height="12"
                      x="1"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        id="svgSpinnersBarsScale0"
                        attributeName="y"
                        begin="0;svgSpinnersBarsScale1.end-0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="0;svgSpinnersBarsScale1.end-0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="5.8"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        attributeName="y"
                        begin="svgSpinnersBarsScale0.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="svgSpinnersBarsScale0.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="10.6"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        attributeName="y"
                        begin="svgSpinnersBarsScale0.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="svgSpinnersBarsScale0.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="15.4"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        attributeName="y"
                        begin="svgSpinnersBarsScale0.begin+0.3s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="svgSpinnersBarsScale0.begin+0.3s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="20.2"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        id="svgSpinnersBarsScale1"
                        attributeName="y"
                        begin="svgSpinnersBarsScale0.begin+0.4s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="svgSpinnersBarsScale0.begin+0.4s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                        values="12;22;12"
                      />
                    </rect>
                  </svg>
                )}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
