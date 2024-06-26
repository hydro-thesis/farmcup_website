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

function humidityTable() {
  const [humidity, setHumidty] = useState([]);

  useEffect(() => {
    const fetchhumidity = async () => {
      try {
        const res = await axios.get('http://localhost:5000/humidityData');
        setHumidty(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchhumidity();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: humidity.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'Humidity Value',
        data: humidity.map((data) => data.humidity),
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
                <Th>Humidity Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {humidity && humidity.length > 0 ? (
                humidity.map((humidity) => (
                  <Tr key={humidity.id}>
                    <Td>{humidity?.humidity}</Td>
                    <Td>{humidity?.time_stamp}</Td>
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
          <Input variant="outline" placeholder="Enter desired Humidity level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

humidityTable.propTypes = {};

export default humidityTable;
