"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import CreateNew from "./CreateNew";
import Image from "next/image";

const Verification = () => {
  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  const [otp, setOtp] = useState(new Array(5).fill(""));

    const handleChange = (element: EventTarget & HTMLInputElement, index: number) => {
      if (isNaN(Number(element.value))) return false;

      setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

  if (element.nextSibling) {
    (element.nextSibling as HTMLElement).focus();
  }
    };

    const handleOtp = async () => {
    const enteredOTP = otp.join('');
    console.log(JSON.stringify({ otp: enteredOTP }))
    }

  return (
    <>
      <button
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
        className="bg-primary text-white py-3 w-full rounded-[4px]"
      >
        Resend E-mail Link
      </button>
      <Modal
        isCentered
        isOpen={isOpen}
        size="lg"
        rounded="40px"
        onClose={onClose}
      >
        {overlay}
        <ModalOverlay />
        <ModalContent py="30px" px="6px">
          <ModalHeader>
            {" "}
            <Image
              width={50}
              height={45}
              src="/logo.png"
              className="w-[30%]"
              alt=""
            />
          </ModalHeader>
          <ModalCloseButton mt="30px" />
          <ModalBody>
            <div className="flex justify-start flex-col gap-[32px]">
              <div className="text-left pt-[8px]">
                <h2 className="text-[24px] font-semibold text-[#111827] pb-[12px]">
                  Enter Verification Code
                </h2>
                <p className="text-[#6C7278]">
                  We have just sent a verification code to
                  egbemode*****@mail.com
                </p>
              </div>
              <div>
                <div className="otp-input flex justify-start items-center gap-4 w-[80%] mx-auto">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      className="w-[56px] h-[56px] bg-[#FAFAFA] rounded-[12px] text-center"
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      maxLength={1}
                      autoFocus={index === 1}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-secondary cursor-pointer text-[14px] font-semibold"
                  onClick={onClose}
                >
                  Send the code again{" "}
                </p>
              </div>
              <div className="w-full">
                <CreateNew />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Verification;
