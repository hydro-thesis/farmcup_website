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

function temperatureTable() {
  const [temperature, setTemperature] = useState([]);

  useEffect(() => {
    const fetchtemperature = async () => {
      try {
        const res = await axios.get('http://localhost:5000/temperatureData');
        setTemperature(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchtemperature();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: temperature.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'temperature Value',
        data: temperature.map((data) => data.temperature),
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
                <Th>temperature Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {temperature && temperature.length > 0 ? (
                temperature.map((temperature) => (
                  <Tr key={temperature.id}>
                    <Td>{temperature?.temperature}</Td>
                    <Td>{temperature?.time_stamp}</Td>
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
          <Input variant="outline" placeholder="Enter desired temperature level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

temperatureTable.propTypes = {};

export default temperatureTable;
