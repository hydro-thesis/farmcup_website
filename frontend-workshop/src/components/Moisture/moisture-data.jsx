import React from "react";
import PropTypes from "prop-types";
import {
  Divider,
  Flex,
  Grid,
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
import { Line } from "react-chartjs-2";

const initialData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "Cocopeat Moisture Level",
      data: UserData.map((data) => data.moisture),
    },
  ],
};

const moistureTable = ({ userData }) => {
  return (
    <Flex justify="center">
      <Flex justify="center" minW="25vw">
        <TableContainer>
          <Table size="sm" minW="25vw" textAlign="center">
            <Thead>
              <Tr>
                <Th>Cococpeat Moisture Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData && userData.length > 0 ? (
                userData.map((moisture, id) => (
                  <Tr key={`moisture-${id}`}>
                    <Td>{moisture?.moisture}</Td>
                    <Td>{moisture?.year}</Td>
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
        <Line data={initialData} />
      </Grid>
    </Flex>
  );
};

moistureTable.propTypes = { userData: PropTypes.array };

export default moistureTable;
