"use client"

import { Bar, Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

ChartJS.register(BarController, LinearScale, CategoryScale, BarElement);
 const ChartAnalysis = () => {
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        labels: "",
        data: [200, 600, 400, 600, 800, 600],
        backgroundColor: ["#1E1E2C", "#1E1E2C", "#1E1E2C", "#5D5FEF"],
        barThickness: 25,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          max: 25,
          min: 0,
        },
      },
    },
  };

    const doughnut = {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ["#FD7F0B", "#242636"],
          borderColor: "#1E1E2C",
          hoverOffset: 4,
          borderWidth: [0, 0, 0],
        },
      ],
    };
  return (
    <>
      {/* <Box
        width={"80%"}
        background={"#2A2C3E"}
        borderRadius="18.6348px"
        margin="32px"
        padding={"10px"}
      >
        <Flex justifyContent={"space-around"} alignItems={"center"} mt="4px">
          <Text
            fontSize={"16px"}
            color="white"
            fontFamily={"Inter"}
            fontWeight="600"
          >
            Statisics
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              //   rightIcon={<ChevronDownIcon />}
              bg={"primary.500"}
              height={"10"}
              width="%"
              fontSize={"14px"}
              transition="all 0.2s"
              borderRadius="full"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              Monthly
            </MenuButton>
            <MenuList>
              <MenuItem>Monday</MenuItem>
              <MenuItem>Tuesday</MenuItem>
              <MenuItem>Wednesday</MenuItem>
              <MenuItem>Thursday</MenuItem>
              <MenuItem>Friday</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Bar
          data={data}
          options={options}
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box w="40%" bg="primary.200" borderRadius={"18.6348px"} mb={""} p={"8"}>
        <Text
          color={"white"}
          textAlign={"center"}
          fontFamily={"Inter"}
          fontSize={"16px"}
          fontWeight="600"
        >
          Course Activities
        </Text>
        <Doughnut  data={doughnut} width="100%" height="100%" />
        <Flex justifyContent={"start"} alignItems={"center"} mt="2">
          <Box w="10px" h="10px" bgColor="#FD7F0B" rounded="50%" mr="7px"></Box>
          <Text color={"#6B6D7F"}>Process</Text>
        </Flex>
      </Box> */}
    </>
  );
};

export default ChartAnalysis