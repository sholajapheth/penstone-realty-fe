"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import Cookies from "js-cookie";
import GoogleSIgnIn from "../GoogleSIgnIn";
import { useAPI } from "@/app/lib/useApi";
import { useAppToast } from "@/app/lib/useAppToast";
import { sellForm } from "@/app/api/UseUser";
import { useStorage } from "@/app/lib/firebase/storage";
import { useFormik } from "formik";
import { sellFormValidator } from "@/app/api/useYup";

const Form = () => {
  const { useAPIMutation } = useAPI();
  const { upload } = useStorage();
  const toast = useAppToast();
  const initialValues = {
    propertyType: "",
    intention: "",
    reasonForSelling: "",
    address: "",
    city: "",
    price: "",
    images: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  const [image, setImage] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [imgName, setImgName] = useState<any>("");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const token = Cookies.get("userJwtToken");
  const user = Cookies.get("userUser");

  const { values, handleBlur, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: sellFormValidator,
      onSubmit: (values) => {
        if (!user && !token) {
          setAuth(true);
          return;
        }
        if (!isChecked) {
          alert("User agreement not agreed to.");
          return;
        }
        if (image.length < 1) {
          alert("Please upload an image.");
          return;
        }
        setLoading(true);
        update.mutate({
          data: {
            propertyType: values.propertyType,
            intention: values.intention,
            reasonForSelling: values.reasonForSelling,
            address: values.address,
            city: values.city,
            price: values.price.toString(),
            images: image,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
          },
        });
      },
    });

  const photoInput: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  // const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files.item(0);
  //     setImgName(file && (file.name as string));
  //     if (file instanceof File) {
  //       try {
  //         const downloadURL = await upload(file);
  //         console.log("File uploaded successfully:", downloadURL);
  //         setImage([downloadURL]);
  //       } catch (error) {
  //         console.error("Error uploading file:", error);
  //       }
  //       if (!file) return;
  //     }
  //   }
  // };

    const handleValidChange = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (e.target.files && e.target.files.length > 0) {
        const files = Array.from(e.target.files);

        try {
          const uploadPromises = files.map((file) => upload(file));
          const results = await Promise.allSettled(uploadPromises);

          const successfulUploads = results
            .filter((result) => result.status === "fulfilled")
            .map((result) => (result as PromiseFulfilledResult<string>).value);

          console.log("Files uploaded successfully:", successfulUploads);
          setImage(successfulUploads);
        } catch (error) {
          console.error("Error uploading files:", error);
        }
      }
    };
  
  const update = useAPIMutation({
    mutationFunction: (x: any) => sellForm(x.data, token ? token : "token"),
    onSuccessFn: (data) => {
      setLoading(false);
      // if (data?.statusCode === 200 || data?.statusCode === 201) {
      toast({
        status: "success",
        description: data.message || "Application Successful",
      });
      resetForm();
    },
  });

  return (
    <>
      {auth && <GoogleSIgnIn />}
      <div className="flex justify-between flex-col lg:flex-row w-full items-start">
        <div className="w-full lg:h-screen lg:overflow-y-auto lg:w-1/2 flex flex-col pt-[40px] lg:pt-[85px] px-[20px] lg:px-[100px] text-secondary pb-[60px] lg:pb-[30px]">
          <h2 className="text-[30px] lg:text-[54px] font-semibold pb-[24px] lg:leading-[63px]">
            {" "}
            Your home for professional help
          </h2>
          <p className="text-[18px] pb-[30px] lg:pb-[68px]">
            Selling your property shouldn&apos;t be a hassle with a partner you
            can trust.
            <br />
            <span className="font-bold"> Urgent? Call +2348023237589</span>
          </p>

          <form className="text-[16px] flex flex-col gap-[24px]">
            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">Intention</label>
              <select
                name="intention"
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                value={values.intention}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" disabled selected>
                  Select intention
                </option>
                <option value="RENT">Rent</option>
                <option value="SELL">Sell</option>
              </select>
              {errors.intention && (
                <p className="text-red-500 text-[14px]">{errors.intention}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">
                Type of property
              </label>
              <select
                name="propertyType"
                required
                className="border-[2px] outline-none rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                value={values.propertyType}
                onChange={handleChange}
              >
                <option value="" disabled selected>Select the property type</option>
                <option
                  className=" text-[16px]"
                  value={"FULLY_DETACHED_DUPLEX"}
                >
                  Fully Detached Duplex
                </option>
                <option className=" text-[16px]" value="SEMI_DETACHED_HOUSE">
                  Semi Detached House
                </option>
                <option className=" text-[16px]" value="ACCOMMODATION_BLOCK">
                  Accommodation Block
                </option>
                <option className=" text-[16px]" value="FLATS_AND_APARTMENT">
                  Flats and Apartment
                </option>
                <option className=" text-[16px]" value="STUDIO_APARTMENT">
                  Studio Apartment
                </option>
                <option className=" text-[16px]" value="MINI_FLATS">
                  Mini Flats
                </option>
                <option className=" text-[16px]" value="RENTAL_SPACES">
                  Rental Spaces
                </option>
                <option
                  className=" text-[16px]"
                  value="WAREHOUSE_AND_INDUSTRIAL"
                >
                  Warehouse and Industrial
                </option>
                <option className=" text-[16px]" value="OFFICE_COMPLEX">
                  Office Complex
                </option>
                <option className=" text-[16px]" value="SPECIALIZED">
                  Specialized
                </option>
              </select>
              {errors.propertyType && (
                <p className="text-red-500 text-[14px]">
                  {errors.propertyType}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">
                Reason for selling / renting
              </label>
              <input
                name="reasonForSelling"
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="Enter reason"
                value={values.reasonForSelling}
                onChange={handleChange}
              />
              {errors.reasonForSelling && (
                <p className="text-red-500 text-[14px]">
                  {errors.reasonForSelling}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">
                Property address
              </label>
              <input
                name="address"
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="Input property address"
                value={values.address}
                onChange={handleChange}
              />
              {errors.address && (
                <p className="text-red-500 text-[14px]">{errors.address}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">City</label>
              <input
                name="city"
                type="text"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="Input city"
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-red-500 text-[14px]">{errors.city}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">Property Price</label>
              <input
                name="price"
                type="number"
                required
                className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                placeholder="NGN"
                value={values.price}
                onChange={handleChange}
              />
              {errors.price && (
                <p className="text-red-500 text-[14px]">{errors.price}</p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-black font-semibold">
                Upload property picture
              </label>
              <input
                type="file"
                required
                className="hidden"
                multiple
                ref={photoInput}
                onChange={handleValidChange}
              />
              <div
                className="border-[2px] border-dashed border-secondary rounded-[10px] px-8 w-full flex flex-col justify-center items-center cursor-pointer py-[26px]"
                onClick={() => {
                  if (photoInput.current) {
                    // @ts-ignore
                    photoInput.current.click();
                  }
                }}
              >
                {image.length < 1 ? (
                  <>
                    <Image
                      width={30}
                      height={30}
                      src="/img/upload.png"
                      alt=""
                    />{" "}
                    <p>Select or drop file</p>
                  </>
                ) : (
                  <p className="text-black">Image(s) uploaded successfully!</p>
                )}
              </div>
              <div
                className="rounded-[10px] px-4 gap-[5px] bg-[#eeeeee] flex justify-center items-center cursor-pointer py-[5px]"
                onClick={() => {
                  if (photoInput.current) {
                    // @ts-ignore
                    photoInput.current.click();
                  }
                }}
              >
                <Image width={15} height={15} src="/img/clip.png" alt="" />{" "}
                <p className="text-[#000929]">Select file</p>
              </div>
              {/* {errors.images && (
                <p className="text-red-500 text-[14px]">{errors.images}</p>
              )} */}
            </div>

            <div className="flex justify-between items-center gap-[32px]">
              <div className="flex flex-col items-start gap-2">
                <label className="text-black font-semibold">First name</label>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="border-[2px] rounded-[10px] h-[45px] lg:h-[52px] px-[16px] w-full"
                  placeholder="First name"
                  value={values.firstName}
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
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-[14px]">{errors.phoneNumber}</p>
              )}
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
            {auth && (
              <p className="text-center text-[14px] text-red-500">
                Please sign up before submitting
              </p>
            )}
            <button
              className="disabled:bg-primary/40 disabled:cursor-not-allowed  bg-primary text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-2"
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
              Submit
            </button>
          </form>
        </div>

        <div className="w-full lg:h-screen lg:overflow-y-auto lg:w-1/2 bg-primary text-white px-[20px] lg:pb-[100px] pb-[50px] ">
          <div className="flex justify-center items-center">
            <Image
              width={550}
              height={600}
              // className="w-full h-full"
              src="/img/house.png"
              alt=""
            />
          </div>
          <div className="pt-[50px] lg:pt-[20px] px-[20px] lg:px-[64px] flex flex-col gap-[32px]">
            {" "}
            <div>
              <p className="font-bold lg:text-left text-center text-[35px] lg:text-[60px] text-white pb-20px leading-[40px] lg:leading-[72px]">
                {" "}
                Bring your property goals to life Now!{" "}
              </p>
              <p className="font-medium lg:text-left text-center text-[18px]">
                Reach out and get started in just 3 minutes.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-[16px]">
              <AvatarGroup size="md" max={4}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex justify-start items-center gap-[4px]">
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
                  <Image width={15} height={15} src="/img/star.png" alt="" />
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

export default Form;
