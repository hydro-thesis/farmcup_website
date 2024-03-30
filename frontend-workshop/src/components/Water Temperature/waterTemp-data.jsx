import React from "react";
import PropTypes from "prop-types";
import {
  Divider,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { UserData } from "./Data";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const initialData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "Water Temperature",
      data: UserData.map((data) => data.waterTemp),
    },
  ],
};

const waterTempTable = ({ userData }) => {
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
              {userData && userData.length > 0 ? (
                userData.map((waterTemp, id) => (
                  <Tr key={`waterTemp-${id}`}>
                    <Td>{waterTemp?.waterTemp}</Td>
                    <Td>{waterTemp?.year}</Td>
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
      <Flex justify="center" minW="50vw">
        <Line data={initialData} />
      </Flex>
    </Flex>
  );
};

waterTempTable.propTypes = { userData: PropTypes.array };

export default waterTempTable;
