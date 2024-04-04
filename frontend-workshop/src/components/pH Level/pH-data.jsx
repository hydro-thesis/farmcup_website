import React, { useEffect, useState } from "react";
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
import axios from "axios";

import io from "socket.io-client";
const socket = io.connect("http://localhost:5173");

function pHLevelTable() {
  const [pH, setPH] = useState([]);

  useEffect(() => {
    const fetchpH = async () => {
      try {
        const res = await axios.get("http://localhost:5000/pHData");
        console.log(res);
        setPH(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchpH();
  }, []);

  console.log(pH);

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
              {pH && pH.length > 0 ? (
                pH.map((ph) => (
                  <Tr key={ph.id}>
                    <Td>{ph?.pH}</Td>
                    <Td>{ph?.time_stamp}</Td>
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
          {/* <Line /> */}
          <Divider />
          <Input variant="outline" placeholder="Enter desired pH level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

export default pHLevelTable;
