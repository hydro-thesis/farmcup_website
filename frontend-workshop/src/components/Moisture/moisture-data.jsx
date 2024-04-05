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

function moistureTable() {
  const [moisture, setMoisture] = useState([]);

  useEffect(() => {
    const fetchmoisture = async () => {
      try {
        const res = await axios.get('http://localhost:5000/moistureData');
        setMoisture(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchmoisture();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: moisture.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'Moisture Value',
        data: moisture.map((data) => data.moisture),
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
                <Th>Cococpeat Moisture Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {moisture && moisture.length > 0 ? (
                moisture.map((moisture) => (
                  <Tr key={moisture.id}>
                    <Td>{moisture?.moisture}</Td>
                    <Td>{moisture?.time_stamp}</Td>
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
        </VStack>
      </Grid>
    </Flex>
  );
}

moistureTable.propTypes = {};

export default moistureTable;
