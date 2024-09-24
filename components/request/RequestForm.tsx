"use client";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import GoogleSIgnIn from "../GoogleSIgnIn";
import { useAPI } from "@/app/lib/useApi";
import { useAppToast } from "@/app/lib/useAppToast";
import { sendRequest } from "@/app/api/UseUser";
import { useStorage } from "@/app/lib/firebase/storage";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import { requestValidation } from "@/app/api/useYup";

const RequestForm = () => {
  const { useAPIMutation } = useAPI();
  const { upload } = useStorage();
  const toast = useAppToast();

  const request = Cookies.get("request");

  const initialValues = {
    topic: request ? request : "",
    description: "",
    attachments: "",
    profession: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  const [attachments, setAttachments] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const token = Cookies.get("userJwtToken");
  const user = Cookies.get("userUser");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: requestValidation,
      onSubmit: (values) => {
        if (!isChecked) {
          alert("User agreement not agreed to.");
          return;
        }
        if (attachments.length < 1) {
          alert("Please upload an image.");
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
            topic: values.topic,
            description: values.description,
            attachments: attachments,
            profession: values.profession,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
          },
        });
      },
    });

  const validInput: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      try {
        const uploadPromises = files.map((file) => upload(file));
        const results = await Promise.allSettled(uploadPromises);

        const successfulUploads = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => (result as PromiseFulfilledResult<string>).value);
        setAttachments(successfulUploads);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };

  const update = useAPIMutation({
    mutationFunction: (x: any) => sendRequest(x.data, token ? token : "token"),
    onSuccessFn: (data) => {
      setLoading(false);
      // if (data?.statusCode === 200 || data?.statusCode === 201) {
      toast({
        status: "success",
        description: data.message || "Request Successful",
      });
      resetForm();
    },
    onErrorFn: () => {
      // Custom error handler
      setLoading(false);
    },
  });

  return (
    <>
      {auth && <GoogleSIgnIn />}
      <div className="flex justify-between flex-col lg:flex-row w-full items-start ">
        <div className="w-full lg:h-screen lg:overflow-y-auto lg:w-1/2 flex flex-col pt-[40px] lg:pt-[85px] px-[20px] lg:px-[100px] text-secondary pb-[60px] lg:pb-[30px]">
          <h2 className="text-[30px] lg:text-[54px] font-semibold pb-[24px] lg:leading-[63px]">
            Start a Request
          </h2>
          <p className="text-[18px] pb-[30px] lg:pb-[68px]">
            Describe your request using the self-served form below.
            <br />
            <span className="font-bold"> Urgent? Call +2348023237589</span>
          </p>

          <form className="text-[16px] flex flex-col gap-[24px]">
            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">
                What can we help you with today?
              </label>
              <select
                name="topic"
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                value={values.topic}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option className=" text-[16px]" value={"ARCHITECTURAL_DESIGN"}>
                  Architectural Design
                </option>
                <option className=" text-[16px]" value={"CONSTRUCTION_SERVICE"}>
                  Construction Services
                </option>
                <option className=" text-[16px]" value={"MARKETING_SUPPORT"}>
                  Marketing Support
                </option>
                <option className=" text-[16px]" value={"SPECIALIZED_SOLUTION"}>
                  Specialized Solution
                </option>
              </select>
              {errors.topic && (
                <p className="text-red-500 text-[14px]">{errors.topic}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">I am a...?</label>
              <select
                name="profession"
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                value={values.profession}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                <option value=""  disabled>
                  Select role
                </option>
                <option value="Occupant">Occupant</option>
                <option value="Agent">Agent </option>
              </select>
              {errors.profession && (
                <p className="text-red-500 text-[14px]">{errors.profession}</p>
              )}
            </div>

            <div className="flex justify-between items-center gap-[32px]">
              <div className="flex flex-col items-start gap-2">
                <label className="text-black font-semibold">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                  placeholder="First name"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-[14px]">{errors.firstName}</p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="text-black font-semibold">Last name</label>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                  placeholder="Last name"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-[14px]">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">Email</label>
              <input
                name="email"
                type="email"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="example@gmail.com"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-[14px]">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">Phone number</label>
              <input
                name="phoneNumber"
                type="tel"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="Phone number"
                value={values.phoneNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-[14px]">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">
                Describe Request
              </label>
              <textarea
                name="description"
                required
                className="border-[2px] rounded-[10px] h-[90px] lg:h-[180px] p-[16px] w-full"
                placeholder="Leave us a message"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.description && (
                <p className="text-red-500 text-[14px]">{errors.description}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">
                What can we help you with today?
              </label>
              <input
                name="attachment"
                type="file"
                required
                multiple
                className="hidden"
                ref={validInput}
                onChange={handleValidChange}
              />
              <div
                className="border-[2px] border-dashed border-secondary rounded-[10px] px-8 w-full flex flex-col justify-center items-center cursor-pointer py-[26px]"
                onClick={() => {
                  if (validInput.current) {
                    // @ts-ignore
                    validInput.current.click();
                  }
                }}
              >
                {attachments.length < 1 ? (
                  <>
                    <Image
                      quality={100}
                      unoptimized={true}
                      width={30}
                      height={30}
                      src="/img/upload.png"
                      alt=""
                    />{" "}
                    <p>Select or drop file</p>
                  </>
                ) : (
                  <p className="text-black">Image(s) uploaded successfully</p>
                )}
              </div>
              <div
                className="rounded-[10px] px-4 gap-[5px] bg-[#eeeeee] flex justify-center items-center cursor-pointer py-[5px]"
                onClick={() => {
                  if (validInput.current) {
                    // @ts-ignore
                    validInput.current.click();
                  }
                }}
              >
                <Image
                  quality={100}
                  unoptimized={true}
                  width={15}
                  height={15}
                  src="/img/clip.png"
                  alt=""
                />
                <p className="text-[#000929]">Select files</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                required
                className=""
                id="check"
              />
              <label className="text-[18px]" htmlFor="check">
                Click Here to accept the terms of our{" "}
                <span className="underline">Privacy Policy</span>.
              </label>
            </div>
            {/* {auth && (
              <p className="text-center text-[14px] text-red-500">
                Please sign up before submitting
              </p>
            )} */}
            <button
              className="disabled:bg-primary/40 disabled:cursor-not-allowed  bg-primary text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-2"
              //@ts-ignore
              onClick={(e) => handleSubmit(e)}
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
                  <rect width="2.8" height="12" x="1" y="6" fill="currentColor">
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
              Start a request
            </button>
          </form>
        </div>

        <div className="w-full lg:h-screen lg:overflow-y-auto lg:w-1/2 bg-primary text-white px-[20px] lg:pb-[100px] pb-[50px] ">
          <div className="flex justify-center items-center">
            <Image
              quality={100}
              unoptimized={true}
              width={300}
              height={600}
              // className="w-full h-full"
              src="/img/telephone.png"
              alt=""
            />
          </div>
          <div className="pt-[50px] lg:pt-[80px] px-[20px] lg:px-[64px] flex flex-col gap-[32px]">
            <div>
              <p className="font-bold lg:text-left text-center text-[35px] lg:text-[60px] text-white pb-20px leading-[40px] lg:leading-[72px]">
                Bring your property goals to life Now!
              </p>
              <p className="font-medium lg:text-left text-center text-[18px]">
                Reach out and get started in just 3 minutes.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-[16px]">
              <Image
                quality={100}
                unoptimized={true}
                src={"/avatarGroup.svg"}
                width={150}
                height={40}
                className="w-unset h-full"
                alt=""
              />
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex justify-start items-center gap-[4px]">
                  <Image
                    quality={100}
                    unoptimized={true}
                    width={15}
                    height={15}
                    src="/img/star.png"
                    alt=""
                  />
                  <Image
                    quality={100}
                    unoptimized={true}
                    width={15}
                    height={15}
                    src="/img/star.png"
                    alt=""
                  />
                  <Image
                    quality={100}
                    unoptimized={true}
                    width={15}
                    height={15}
                    src="/img/star.png"
                    alt=""
                  />
                  <Image
                    quality={100}
                    unoptimized={true}
                    width={15}
                    height={15}
                    src="/img/star.png"
                    alt=""
                  />
                  <Image
                    quality={100}
                    unoptimized={true}
                    width={15}
                    height={15}
                    src="/img/star.png"
                    alt=""
                  />
                  <p className="text-[18px] font-medium">5.0</p>
                </div>
                <p className="text-[18px] text-center lg:text-left font-medium">
                  200+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
