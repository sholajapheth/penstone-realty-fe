"use client";
import { useState } from "react";
import GoogleSIgnIn from "../GoogleSIgnIn";
import { userApply } from "@/app/api/UseUser";
import { useAPI } from "@/app/lib/useApi";
import { useAppToast } from "@/app/lib/useAppToast";
import Cookies from "js-cookie";
import useLocalStorage from "@/app/api/useLocalStorage";
import { useFormik } from "formik";
import { applyValidation } from "@/app/api/useYup";

const ApplicationForm = () => {
  const { useAPIMutation } = useAPI();
  const toast = useAppToast();

  const initialValues = {
    intentionOfUse: "",
    moveInDate: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    countryCode: "+234",
    dateOfBirth: "",
    monthlyRentBudget: "",
    employerName: "",
    employerAddress: "",
    employmentDuration: "",
    annualIncome: "",
    emergencyContactAddress: "",
    emergencyContactName: "",
    numberOfOccupants: "",
    userEmail: "",
  };

  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  const { getItem } = useLocalStorage();

  const [dateOfBirth, setDateOfBirth] = useState<string | undefined>("");
  const [moveInDate, setMoveInDate] = useState<string | undefined>("");

  const token = Cookies.get("userJwtToken");
  const user = Cookies.get("userUser");
  const [isChecked, setIsChecked] = useState(false);
  const propertyId = getItem("id");
  const title = getItem("title");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: applyValidation,
      onSubmit: (values) => {
        if (!isChecked) {
          alert("User agreement not agreed to.");
          return;
        }
        if (moveInDate && moveInDate?.length < 1) {
          alert("Move in date is required");
          return;
        }
        if (dateOfBirth && dateOfBirth?.length < 1) {
          alert("Date of birth is required");
          return;
        }
        if (!token) {
          setAuth(true);
            alert("Please sign up before submitting");
          return;
        }
        setLoading(true);
        update.mutate({
          data: {
            propertyId: propertyId,
            intentionOfUse: values.intentionOfUse,
            moveInDate,
            numberOfOccupants: parseInt(values.numberOfOccupants),
            contactInformation: {
              firstName: values.firstName,
              lastName: values.lastName,
              phoneNumber: values.phoneNumber,
              email: values.email,
              address: values.address,
            },
            personalInformation: {
              dateOfBirth,
              monthlyRentBudget: values.monthlyRentBudget.toString(),
              employerName: values.employerName,
              employerAddress: values.employerAddress,
              employmentDuration: values.employmentDuration,
              annualIncome: values.annualIncome.toString(),
              emergencyContactName: values.emergencyContactName,
              emergencyContactAddress: values.emergencyContactAddress,
            },
          },
        });
      },
    });

  const update = useAPIMutation({
    mutationFunction: (x: any) => userApply(x.data, token ? token : "token"),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data.message || "Application Successful",
      });
      resetForm();
    },
    onErrorFn: () => {
      setLoading(false);
    },
  });

  return (
    <>
      {auth && <GoogleSIgnIn />}
      <div className="bg-white flex  justify-center">
        <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
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
                <input
                  name="intentionOfUse"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.intentionOfUse}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.intentionOfUse && (
                  <p className="text-red-500 text-[14px]">
                    {errors.intentionOfUse}
                  </p>
                )}
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
                    name="firstName"
                    type="text"
                    required
                    className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-[14px]">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2 w-[50%]">
                  <label className="font-medium">
                    Last Name <span className="text-[14px]">(Required)</span>{" "}
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-[14px]">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Phone Number <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="phoneNumber"
                  type="tel"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-[14px]">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Email <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <p className="text-red-500 text-[14px]">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Address <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="address"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-[14px]">{errors.address}</p>
              )}
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
                  name="monthlyRentBudget"
                  type="number"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.monthlyRentBudget}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.monthlyRentBudget && (
                  <p className="text-red-500 text-[14px]">
                    {errors.monthlyRentBudget}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Employer Name <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="employerName"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.employerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.employerName && (
                  <p className="text-red-500 text-[14px]">
                    {errors.employerName}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Employer Address{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="employerAddress"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.employerAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.employerAddress && (
                  <p className="text-red-500 text-[14px]">
                    {errors.employerAddress}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Length of Employment{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="employmentDuration"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.employmentDuration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.employmentDuration && (
                  <p className="text-red-500 text-[14px]">
                    {errors.employmentDuration}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Annual Income <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="annualIncome"
                  type="number"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.annualIncome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.annualIncome && (
                  <p className="text-red-500 text-[14px]">
                    {errors.annualIncome}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Emergency Contact Name:{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="emergencyContactName"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.emergencyContactName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.emergencyContactName && (
                  <p className="text-red-500 text-[14px]">
                    {errors.emergencyContactName}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  Emergency Contact Address:{" "}
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="emergencyContactAddress"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.emergencyContactAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.emergencyContactAddress && (
                  <p className="text-red-500 text-[14px]">
                    {errors.emergencyContactAddress}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="font-medium">
                  How many people will be living in the home?
                  <span className="text-[14px]">(Required)</span>{" "}
                </label>
                <input
                  name="numberOfOccupants"
                  type="number"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[64px] px-[16px] w-full"
                  value={values.numberOfOccupants}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.numberOfOccupants && (
                  <p className="text-red-500 text-[14px]">
                    {errors.numberOfOccupants}
                  </p>
                )}
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
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  required
                  name=""
                  id="check"
                />
                <label htmlFor="check">Yes</label>
              </div>
              <p className="font-medium">
                PLEASE NOTE, BY CLICKING SUBMIT YOU AGREE AND ACKNOWLEDGE THAT
                THE INFORMATION YOU&apos;VE SUPPLIED WILL BE USED TO CONDUCT A
                BACKGROUND INVESTIGATION, INCLUDING CREDIT, CRIMINAL, AND
                EVICTION CHECKS
              </p>
            </div>
           
            <div className="flex justify-center lg:justify-start">
              <button
                className={` disabled:bg-primary/40 disabled:cursor-not-allowed bg-primary text-white font-semibold flex justify-center items-center gap-2 py-3 rounded-xl px-8 w-full lg:w-[20%]`}
                //@ts-ignore
                onClick={handleSubmit}
                disabled={loading}
                type="button"
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
