import React, { useState } from "react";
import PropTypes from "prop-types";
import { Bar, Line } from "react-chartjs-2";
import { UserData } from "./Data";
import "chart.js/auto";
import { Flex } from "@chakra-ui/react";

const initialData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "Water Temperature",
      data: UserData.map((data) => data.pH),
    },
  ],
};

const waterTempGraph = () => {
  const [userData, setUserData] = useState({ initialData });

  return (
    <Flex justify="center" maxH="75vh" minW="75vw">
      <Line data={initialData} />
    </Flex>
  );
};

waterTempGraph.propTypes = {};

export default waterTempGraph;