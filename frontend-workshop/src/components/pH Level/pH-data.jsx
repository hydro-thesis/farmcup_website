import React from "react";
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
import { Line } from "react-chartjs-2";

const initialData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "pH Level",
      data: UserData.map((data) => data.pH),
    },
  ],
};

const pHLevelTable = ({ userData }) => {
  return (
    <Flex justify="center">
      <Flex justify="center" minW="25vw">
        <TableContainer>
          <Table size="sm" minW="25vw" textAlign="center">
            <Thead>
              <Tr>
                <Th>pH Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData && userData.length > 0 ? (
                userData.map((ph, id) => (
                  <Tr key={`pH-${id}`}>
                    <Td>{ph?.pH}</Td>
                    <Td>{ph?.year}</Td>
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
          <Input variant="outline" placeholder="Enter desired pH level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
};

pHLevelTable.propTypes = { userData: PropTypes.array };

export default pHLevelTable;
