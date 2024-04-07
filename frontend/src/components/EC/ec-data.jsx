import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
  VStack
} from '@chakra-ui/react';

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function ecTable() {
  const [ec, setEC] = useState([]);

  useEffect(() => {
    const fetchec = async () => {
      try {
        const res = await axios.get('http://localhost:5000/ecData');
        setEC(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchec();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: ec.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'ec Value',
        data: ec.map((data) => data.EC),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
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
                <Th>EC Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ec && ec.length > 0 ? (
                ec.map((ec) => (
                  <Tr key={ec.id}>
                    <Td>{ec?.EC}</Td>
                    <Td>{ec?.time_stamp}</Td>
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
          <Input variant="outline" placeholder="Enter desired EC level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

ecTable.propTypes = { userData: PropTypes.array };

export default ecTable;
