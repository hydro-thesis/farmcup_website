import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Input,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { UserData } from "./Data";
import "chart.js/auto";
import { Bar, Bubble, Doughnut, Line, Scatter } from "react-chartjs-2";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../services/firebase";

const initialData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "EC Level",
      data: UserData.map((data) => data.EC),
    },
  ],
};


async function addDocToDB(text) {
  await addDoc(collection(db, "parameters"), {
    pH: text,
    water_level: text
  });
}

const temperatureHumidityTable = ({ userData }) => {
  const [value, setValue] = useState(""); // State to hold input value
  const inputRef = useRef(null); // Reference to input element

  return (
    <Flex justify="center">
      <Flex justify="center" minW="25vw">
        <TableContainer>
          <Table size="sm" minW="25vw" textAlign="center">
            <Thead>
              <Tr>
                <Th>EC Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData && userData.length > 0 ? (
                userData.map((EC, id) => (
                  <Tr key={`EC-${id}`}>
                    <Td>{EC?.EC}</Td>
                    <Td>{EC?.year}</Td>
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
          <Input variant="outline" placeholder="Enter desired EC level here" ref={inputRef} />
          <Button onClick={() => {addDocToDB(inputRef.current.value || '')}}>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
};

temperatureHumidityTable.propTypes = { userData: PropTypes.array };

export default temperatureHumidityTable;
