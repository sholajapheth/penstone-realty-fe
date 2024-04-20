"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

interface Word {
  text: string;
  isSelected: boolean;
}

const Header = () => {
  const [streetAddress, setStreetAddress] = useState(" ");
  const [formPage, setFormPage] = useState(1);
  const [words, setWords] = useState<Word[]>([
    { text: "A/C", isSelected: false },
    { text: "Deck", isSelected: false },
    { text: "Pet Friendly", isSelected: false },
    { text: "Free Parking Spots", isSelected: false },
    { text: "Pool", isSelected: false },
    { text: "Yard", isSelected: false },
    { text: "Free Wi-Fi", isSelected: false },
    { text: "Gym", isSelected: false },
    { text: "Hardwood Floor", isSelected: false },
    { text: "Jacuzzi", isSelected: false },
  ]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [newWord, setNewWord] = useState("");

  const handleAddWord = () => {
    if (newWord.trim() !== "") {
      setWords([...words, { text: newWord.trim(), isSelected: true }]);
      setSelectedWords([...selectedWords, newWord.trim()]);
      setNewWord("");
      onClose();
    }
  };

  const handleWordClick = (word: string) => {
    const updatedWords = words.map((w) =>
      w.text === word ? { ...w, isSelected: !w.isSelected } : w
    );
    setWords(updatedWords);

    const isNewlyAdded = !words.some((w) => w.text === word);
    if (isNewlyAdded) {
      setSelectedWords([...selectedWords, word]);
    } else {
      const updatedSelectedWords = [...selectedWords];
      const isAlreadySelected = updatedSelectedWords.includes(word);
      if (isAlreadySelected) {
        const index = updatedSelectedWords.indexOf(word);
        updatedSelectedWords.splice(index, 1);
      } else {
        updatedSelectedWords.push(word);
      }
      setSelectedWords(updatedSelectedWords);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWord(event.target.value);
  };

  const handleNextPage = () => {
    setFormPage(2);
  };

  const handlePreviousPage = () => {
    setFormPage(1);
  };

  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);

  return (
    <>
      <div className="pt-[60px] pb-[150px] text-[#00080B] px-[25%]">
        <h2 className="text-[#00080B] text-[32px] font-bold leading-[125%] text-center pb-[16px]">
          Add New Property
        </h2>
        <p className="text-[#00080B] text-[16px] leading-[160%] pb-[40px] text-center">
          Make sure you have filled in all the necessary fields and have
          uploaded <br /> all the required files.
        </p>

        <div className="flex justify-center items-center gap-[16px]">
          <div className="flex justify-center gap-2 items-center">
            <div
              className={`h-[28px] w-[28px] rounded-full ${
                formPage === 1
                  ? "bg-secondary  text-white"
                  : " bg-[#D9E2E6] border-secondary border-[2px]"
              } font-bold text-[12px] flex justify-center items-center`}
            >
              {formPage === 1 ? (
                "1"
              ) : (
                <Image src="/img/tick.png" width={10} height={10} alt="" />
              )}
            </div>

            <p className="font-medium leading-[150%] text-[16px]">Request</p>
          </div>
          <div>
            <Image src="/img/rightCarat.png" width={20} height={20} alt="" />
          </div>
          <div className="flex justify-center gap-2 items-center">
            <div
              className={`h-[28px] w-[28px]  ${
                formPage === 2 ? "bg-secondary  text-white" : " bg-[#D9E2E6]"
              } rounded-full font-bold text-[12px] flex justify-center items-center`}
            >
              2
            </div>

            <p className="font-medium leading-[150%] text-[16px]">
              Listing Information
            </p>
          </div>
        </div>

        <div className="my-[32px] h-[1.5px] w-full bg-[#D9E2E6]"></div>

        {formPage === 1 ? (
          <div className="w-full border-[#D9E2E6] border-[2px] rounded-[8px] p-[24px] text-[#000929]">
            <h2 className="text-[#000929] text-[18px] font-semibold leading-[145%] pb-[24px]">
              Property Address
            </h2>

            <div className="flex flex-col items-start gap-[20px]">
              <div className="flex justify-between items-center gap-[24px] w-full">
                <div className="flex flex-col items-start gap-2 w-[50%]">
                  <label className="text-[14px] font-medium">
                    Street Address*
                  </label>
                  <input
                    type="text"
                    required
                    className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="Street Address"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 w-[50%]">
                  <label className="text-[14px] font-medium">Unit Number</label>
                  <input
                    type="text"
                    required
                    className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full"
                    placeholder="Unit Number"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-[24px] w-full">
                <div className="flex flex-col items-start gap-2 w-[33%]">
                  <label className="text-[14px] font-medium">City*</label>
                  <input
                    type="text"
                    required
                    className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full"
                    placeholder="City"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 w-[33%]">
                  <label className="text-[14px] font-medium">State*</label>
                  <input
                    type="text"
                    required
                    className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full"
                    placeholder="State"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 w-[33%]">
                  <label className="text-[14px] font-medium">Zip Code*</label>
                  <input
                    type="text"
                    required
                    className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full"
                    placeholder="Zip Code"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <label className="text-[14px] font-medium flex justify-start items-center gap-2">
                  I&apos;m representing*{" "}
                  <Image
                    src="/img/important.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </label>

                <div className="flex justify-start items-center gap-10">
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="radio"
                      required
                      className="h-4 w-4"
                      id="landlord"
                    />
                    <label
                      className="text-[14px] font-medium leading-[150%] text-[#000929] whitespace-nowrap"
                      htmlFor="landlord"
                    >
                      The landlord or property
                    </label>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="radio"
                      required
                      className="h-4 w-4"
                      id="agent"
                    />
                    <label
                      className="text-[14px] font-medium leading-[150%] text-[#000929]"
                      htmlFor="agent"
                    >
                      Agent
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 ">
                <label className="text-[14px] font-medium flex justify-start items-center gap-2">
                  Property managed by
                  <Image
                    src="/img/important.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </label>

                <div className="flex justify-start items-center gap-10">
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="radio"
                      required
                      className="h-4 w-4"
                      id="landlord"
                    />
                    <label
                      className="text-[14px] font-medium leading-[150%] text-[#000929] whitespace-nowrap"
                      htmlFor="landlord"
                    >
                      Pentstone
                    </label>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="radio"
                      required
                      className="h-4 w-4"
                      id="agent"
                    />
                    <label
                      className="text-[14px] font-medium leading-[150%] text-[#000929]"
                      htmlFor="agent"
                    >
                      Agent
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full p-[24px] flex justify-start items-center border-[#D9E2E6] border-[2px] rounded-[8px] shadow-md gap-[24px]">
              <Image src="/img/address.png" width={56} height={56} alt="" />

              <div className="flex flex-col items-start gap-2">
                <h2 className="text-[#00080B] text-[18px] font-semibold leading-[145%]">
                  Property Address
                </h2>
                <p className="text-[#414141] text-[14px] font-medium leading-[140%]">
                  Lekki Conservation Roat, Chevron
                </p>
              </div>
            </div>

            <div className="w-full mt-[32px] border-[#D9E2E6] border-[2px] rounded-[8px] p-[24px] text-[#000929]">
              <h2 className="text-[#000929] text-[18px] font-semibold leading-[145%] pb-[24px]">
                Listing Information
              </h2>

              <div className="flex items-start flex-col gap-[24px]">
                <div className="flex flex-col items-start gap-2 w-full">
                  <label className="text-[14px] font-medium">
                    Property Type*
                  </label>
                  <select className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full">
                    <option value="">Select type</option>
                    <option value="">House</option>
                  </select>
                </div>

                <div className="flex justify-between items-center gap-[24px] w-full">
                  <div className="flex flex-col items-start gap-2 w-[33%]">
                    <label className="text-[14px] font-medium">Bedroom*</label>
                    <select className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full">
                      <option value="">How many beds</option>
                      <option value="">House</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-[33%]">
                    <label className="text-[14px] font-medium">Bath*</label>
                    <select className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full">
                      <option value="">How many baths</option>
                      <option value="">House</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-[33%]">
                    <label className="text-[14px] font-medium">
                      Square Feet*
                    </label>
                    <input
                      type="text"
                      required
                      className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full"
                      placeholder="sq ft"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-[24px] w-full">
                  <div className="flex flex-col items-start gap-2 w-[50%]">
                    <label className="text-[14px] font-medium">
                      Monthly Rent*
                    </label>
                    <div className="flex justify-start items-center">
                      <div className="border-[2px] rounded-l-[8px] flex justify-center items-center text-center h-[48px] outline-none px-[16px] w-[15%]">
                        $
                      </div>
                      <input
                        type="text"
                        required
                        className="border-[2px] rounded-r-[8px] h-[48px] outline-none px-[16px] w-[85%]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-[50%]">
                    <label className="text-[14px] font-medium flex justify-start items-center gap-1">
                      Security Deposit{" "}
                      <Image
                        src="/img/important.png"
                        width={15}
                        height={15}
                        alt=""
                      />
                    </label>
                    <div className="flex justify-start items-center">
                      <div className="border-[2px] rounded-l-[8px] flex justify-center items-center text-center h-[48px] outline-none px-[16px] w-[15%]">
                        $
                      </div>
                      <input
                        type="text"
                        required
                        className="border-[2px] rounded-r-[8px] h-[48px] outline-none px-[16px] w-[85%]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <label className="text-[14px] font-medium">
                    Select Amenities
                  </label>
                  <div className="border-[2px] rounded-[8px] outline-none p-[16px] w-full">
                    <div className="flex justify-start items-center gap-[16px] flex-wrap mb-4">
                      {words.map((word, index) => (
                        <button
                          className={`${
                            word.isSelected
                              ? "bg-[#D9E2E6] border-secondary text-secondary"
                              : ""
                          } border-[2px] rounded-[8px] py-2 px-4 font-medium`}
                          key={index}
                          onClick={() => handleWordClick(word.text)}
                        >
                          {word.text}
                        </button>
                      ))}
                    </div>
                    <div>
                      <div
                        onClick={() => {
                          setOverlay(<OverlayTwo />);
                          onOpen();
                        }}
                        className="text-secondary flex justify-start items-center gap-1 font-semibold text-[14px] cursor-pointer"
                      >
                        <Image
                          src="/img/add.png"
                          width={15}
                          height={15}
                          alt=""
                        />
                        Add Amenities
                      </div>
                      <Modal
                        isCentered
                        isOpen={isOpen}
                        size="md"
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
                              <div>
                                <div className="flex flex-col items-start gap-2">
                                  <label className="text-[24px] font-semibold text-[#111827] pb-[12px]">
                                    Add Amenity
                                  </label>
                                  <input
                                    value={newWord}
                                    onChange={handleInputChange}
                                    placeholder="Add a new amenity..."
                                    className="border-[2px] border-[#AFAFAF] rounded-[4px] h-[40px] px-[16px] w-full outline-none"
                                  />
                                </div>
                                <button
                                  onClick={handleAddWord}
                                  className="bg-primary text-white py-3 w-full rounded-[4px] mt-4"
                                >
                                  Add Amenity
                                </button>
                              </div>
                            </div>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </div>
                    {/* <h2>Selected Words: {selectedWords.join(", ")}</h2> */}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <label className="text-[14px] font-medium">
                    Description*
                  </label>
                  <textarea
                    className="border-[2px] rounded-[8px] h-[145px] outline-none p-[16px] w-full"
                    placeholder="Tell us about your home here"
                  />
                </div>

                <div className="flex justify-between items-center gap-[24px] w-full">
                  <div className="flex flex-col items-start gap-2 w-[50%]">
                    <label className="text-[14px] font-medium">
                      Date Available
                    </label>
                    <input
                      type="date"
                      required
                      className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 w-[50%]">
                    <label className="text-[14px] font-medium">
                      Lease Duration
                    </label>
                    <select className="border-[2px] rounded-[8px] h-[48px] outline-none px-[16px] w-full">
                      <option value="">Select duration</option>
                      <option value="">House</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-end items-center pt-[32px] gap-[16px]">
          {formPage === 2 && (
            <button
              className="py-[16px] px-[60px] bg-[#D9E2E6] rounded-[8px] text-secondary font-bold disabled:bg-secondary/30"
              //   disabled={streetAddress === " "}
              onClick={handlePreviousPage}
            >
              Previous
            </button>
          )}

          <button
            className="py-[16px] px-[60px] bg-secondary rounded-[8px] text-white font-bold disabled:bg-secondary/30"
            // disabled={streetAddress === " "}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
