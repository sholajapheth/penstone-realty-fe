import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Text,
  TableContainer,
  VStack,
  Avatar,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

const ActivitySection = () => {
  return (
    <>
      <div className="flex justify-between items-start gap-[14px] m-[32px]">
        <div className="w-[65%] border-[#D9E2E6] border-[2px] rounded-[8px]">
          <div className="flex justify-between items-center px-[20px] pt-[20px] pb-[34px]">
            <div>
              <p className="font-semibold text-[20px] text-black">
                Activity{" "}
                <span className="font-medium text-[16px] text-[#00080B]">
                  December 7, 2021
                </span>
              </p>
            </div>
            <div>
              <img src="/img/details.png" alt="" />
            </div>
          </div>

          <div>
            <Tabs position="relative" variant="unstyled">
              <TabList mx="10px">
                <Tab color="#00080B">All</Tab>
                <Tab color="#00080B">Tenancy</Tab>
                <Tab color="#00080B">Task</Tab>
                <Tab color="#00080B">Viewing</Tab>
                <Tab color="#00080B">Recurring</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="3px"
                w="30px"
                mr="25px"
                bg="#003F57"
                color="#003F57"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead borderRadius="12px">
                        <Tr bg={"neutral.bgSecondary"}>
                          {/* <Th></Th>
                          <Th> </Th>
                          <Th> </Th>
                          <Th></Th> */}
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr
                          color={"#00080B"}
                          fontWeight={"400"}
                          fontSize={"15px"}
                        >
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Rent Charge - ES683
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                09:00 AM
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={"4px"}
                            >
                              <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                              />

                              <VStack
                                justifyContent="flex-end"
                                alignItems="start"
                              >
                                <Text
                                  color={"#00080B"}
                                  fontSize={"16px"}
                                  fontWeight={"600"}
                                >
                                  James Bond
                                </Text>
                                <Text
                                  color={"neutral.dark400"}
                                  fontSize={"14px"}
                                >
                                  Renter
                                </Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Beverly Springs{" "}
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                Palm Harbor, TX
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Button
                              fontSize={"15px"}
                              fontWeight={"600"}
                              color="#27AE60"
                              bg="rgba(111, 207, 151, 0.1)"
                            >
                              Task
                            </Button>
                          </Td>
                        </Tr>
                        <Tr
                          color={"#00080B"}
                          fontWeight={"400"}
                          fontSize={"15px"}
                        >
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Rent Charge - ES683
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                09:00 AM
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={"4px"}
                            >
                              <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                              />

                              <VStack
                                justifyContent="flex-end"
                                alignItems="start"
                              >
                                <Text
                                  color={"#00080B"}
                                  fontSize={"16px"}
                                  fontWeight={"600"}
                                >
                                  James Bond
                                </Text>
                                <Text
                                  color={"neutral.dark400"}
                                  fontSize={"14px"}
                                >
                                  Renter
                                </Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Beverly Springs{" "}
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                Palm Harbor, TX
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Button
                              fontSize={"15px"}
                              fontWeight={"600"}
                              color="#F06565"
                              bg="#FDF7F7"
                            >
                              Recurring
                            </Button>
                          </Td>
                        </Tr>
                        <Tr
                          color={"#00080B"}
                          fontWeight={"400"}
                          fontSize={"15px"}
                        >
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Rent Charge - ES683
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                09:00 AM
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={"4px"}
                            >
                              <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                              />

                              <VStack
                                justifyContent="flex-end"
                                alignItems="start"
                              >
                                <Text
                                  color={"#00080B"}
                                  fontSize={"16px"}
                                  fontWeight={"600"}
                                >
                                  James Bond
                                </Text>
                                <Text
                                  color={"neutral.dark400"}
                                  fontSize={"14px"}
                                >
                                  Renter
                                </Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Beverly Springs{" "}
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                Palm Harbor, TX
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Button
                              fontSize={"15px"}
                              fontWeight={"600"}
                              color="#F06565"
                              bg="#FDF7F7"
                            >
                              Recurring
                            </Button>
                          </Td>
                        </Tr>
                        <Tr
                          color={"#00080B"}
                          fontWeight={"400"}
                          fontSize={"15px"}
                        >
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Rent Charge - ES683
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                09:00 AM
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={"4px"}
                            >
                              <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                              />

                              <VStack
                                justifyContent="flex-end"
                                alignItems="start"
                              >
                                <Text
                                  color={"#00080B"}
                                  fontSize={"16px"}
                                  fontWeight={"600"}
                                >
                                  James Bond
                                </Text>
                                <Text
                                  color={"neutral.dark400"}
                                  fontSize={"14px"}
                                >
                                  Renter
                                </Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td>
                            <VStack
                              justifyContent="flex-end"
                              alignItems="start"
                            >
                              <Text
                                color={"#00080B"}
                                fontSize={"16px"}
                                fontWeight={"600"}
                              >
                                Beverly Springs{" "}
                              </Text>
                              <Text color={"neutral.dark400"} fontSize={"14px"}>
                                Palm Harbor, TX
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <Button
                              fontSize={"15px"}
                              fontWeight={"600"}
                              color="#F06565"
                              bg="#FDF7F7"
                            >
                              Recurring
                            </Button>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>{" "}
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>

        <div className="w-[35%] border-[#D9E2E6] border-[2px] rounded-[8px]">
          <div className="flex justify-between items-center px-[20px] pt-[20px] pb-[34px]">
            <div>
              <p className="font-semibold text-[20px] text-black">
                Tenant Request
              </p>
            </div>
            <div>
              <p className="font-medium text-[16px] text-primary">View All</p>{" "}
            </div>
          </div>

          <div className="flex flex-col items-start gap-[26px] px-[23px] w-full pb-[40px]">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-[5px]">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <div>
                  <h2 className="text-[#00080B] text-[18px] font-medium">
                    Valentino Parker
                  </h2>
                  <p className="text-[#acb3b6] text-[16px] font-medium">
                    Palm Harbor Dec 7, 2021
                  </p>
                </div>
              </div>
              <div>
                <Image src="/img/crumb.png" width={20} height={20} alt="" />
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D9E2E6]"></div>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-[5px]">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <div>
                  <h2 className="text-[#00080B] text-[18px] font-medium">
                    Valentino Parker
                  </h2>
                  <p className="text-[#acb3b6] text-[16px] font-medium">
                    Palm Harbor Dec 7, 2021
                  </p>
                </div>
              </div>
              <div>
                <Image src="/img/crumb.png" width={20} height={20} alt="" />
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D9E2E6]"></div>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-[5px]">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <div>
                  <h2 className="text-[#00080B] text-[18px] font-medium">
                    Valentino Parker
                  </h2>
                  <p className="text-[#acb3b6] text-[16px] font-medium">
                    Palm Harbor Dec 7, 2021
                  </p>
                </div>
              </div>
              <div>
                <Image src="/img/crumb.png" width={20} height={20} alt="" />
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D9E2E6]"></div>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-[5px]">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <div>
                  <h2 className="text-[#00080B] text-[18px] font-medium">
                    Valentino Parker
                  </h2>
                  <p className="text-[#acb3b6] text-[16px] font-medium">
                    Palm Harbor Dec 7, 2021
                  </p>
                </div>
              </div>
              <div>
                <Image src="/img/crumb.png" width={20} height={20} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitySection;
