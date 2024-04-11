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
import Verification from "./VerificationCode";
import Image from "next/image";

const RecoverPassword = () => {
  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);

  return (
    <>
      <button
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
        className="bg-primary text-white py-3 w-full rounded-[4px]"
      >
        Continue
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
                  Recover password
                </h2>
                <p className="text-[#6C7278]">
                  An email has been sent to jopesephnwa@gmail.com. You&apos;ll
                  receive instructions on how to set a new password
                </p>
              </div>
              <div>
                <div className="flex flex-col items-start gap-2">
                  <label className="text-[14px] text-secondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="border-[2px] border-[#AFAFAF] rounded-[4px] h-[40px] px-[16px] w-full outline-none"
                    placeholder="Enter your email here"
                  />
                </div>
              </div>
              <div>
                <p
                  className="text-secondary cursor-pointer text-[14px] font-semibold"
                  onClick={onClose}
                >
                  Return to login
                </p>
              </div>
              <div className="w-full">
                <Verification />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecoverPassword;
