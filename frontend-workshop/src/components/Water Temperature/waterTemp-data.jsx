import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { UserData } from "./Data";
import "chart.js/auto";

const WaterTempTable = ({ userData }) => {
  const [newWaterTemp, setNewWaterTemp] = useState(""); // State to hold new water temperature value
  const [userDataState, setUserData] = useState(userData); // State to hold UserData

  // Load input value from local storage on component mount
  useEffect(() => {
    const savedInput = localStorage.getItem("waterTempInput");
    if (savedInput) {
      setNewWaterTemp(savedInput);
    }
  }, []);

  // Function to handle update button click
  const handleUpdate = () => {
    const updatedUserData = [...userDataState]; // Create a copy of UserData array
    const newEntry = {
      year: new Date().getFullYear(),
      waterTemp: parseInt(newWaterTemp),
    };
    updatedUserData.push(newEntry); // Push new data
    // Update UserData state
    setUserData(updatedUserData);
    setNewWaterTemp(""); // Clear input field after update
    // Save input value to local storage
    localStorage.setItem("waterTempInput", "");
  };

  const initialData = {
    labels: userDataState.map((data) => data.year),
    datasets: [
      {
        label: "Water Temperature",
        data: userDataState.map((data) => data.waterTemp),
      },
    ],
  };

  return (
    <Flex justify="center">
      <Flex justify="center" minW="25vw">
        <TableContainer>
          <Table size="sm" minW="25vw" textAlign="center">
            <Thead>
              <Tr>
                <Th>Water Temperature</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userDataState && userDataState.length > 0 ? (
                userDataState.map((entry, id) => (
                  <Tr key={`entry-${id}`}>
                    <Td>{entry?.waterTemp}</Td>
                    <Td>{entry?.year}</Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={2}>No data available</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Divider orientation="vertical" w="2vw" />
      <Grid justify="center" minW="50vw">
        <VStack>
          <Line data={initialData} />
          <Divider />
          <Input
            variant="outline"
            placeholder="Enter desired water temperature here"
            value={newWaterTemp}
            onChange={(e) => setNewWaterTemp(e.target.value)}
          />
          <Button onClick={handleUpdate}>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
};

WaterTempTable.propTypes = { userData: PropTypes.array };

export default WaterTempTable;
