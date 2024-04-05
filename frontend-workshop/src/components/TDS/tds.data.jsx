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

function tdsLevelTable() {
  const [tds, settds] = useState([]);

  useEffect(() => {
    const fetchtds = async () => {
      try {
        const res = await axios.get('http://localhost:5000/tdsData');
        settds(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchtds();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: tds.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'tds Value',
        data: tds.map((data) => data.tds),
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
                <Th>tds Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tds && tds.length > 0 ? (
                tds.map((tds) => (
                  <Tr key={tds.id}>
                    <Td>{tds?.tds}</Td>
                    <Td>{tds?.time_stamp}</Td>
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
          <Input variant="outline" placeholder="Enter desired tds level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

export default tdsLevelTable;
