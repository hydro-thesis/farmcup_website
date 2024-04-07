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

function ambientLightTable() {
  const [ambientLight, setambientLight] = useState([]);

  useEffect(() => {
    const fetchambientLight = async () => {
      try {
        const res = await axios.get('http://localhost:5000/ambientLightData');
        setambientLight(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchambientLight();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: ambientLight.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'Ambient Light Value',
        data: ambientLight.map((data) => data.ambient_light),
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
                <Th>Ambient Light</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ambientLight && ambientLight.length > 0 ? (
                ambientLight.map((ambientLight) => (
                  <Tr key={ambientLight.id}>
                    <Td>{ambientLight?.ambient_light}</Td>
                    <Td>{ambientLight?.time_stamp}</Td>
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
          <Input variant="outline" placeholder="Enter desired Ambient Light level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

ambientLightTable.propTypes = {};

export default ambientLightTable;
