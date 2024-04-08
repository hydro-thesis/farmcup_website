import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
  VStack
} from '@chakra-ui/react';

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function pHLevelTable() {
  const [pH, setPH] = useState([]);

  useEffect(() => {
    const fetchpH = async () => {
      try {
        const res = await axios.get('http://localhost:5000/pHData');
        setPH(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchpH();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: pH.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'pH Value',
        data: pH.map((data) => data.pH),
        fill: false,
        borderColor: '#48BB78',
        tension: 0.1
      }
    ]
  };

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
          <Line data={chartData} />
          <Divider />
          <Input variant="outline" placeholder="Enter desired pH level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

export default pHLevelTable;
