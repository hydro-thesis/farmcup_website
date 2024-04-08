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

function waterLevelTable() {
  const [waterLevel, setWaterLevel] = useState([]);

  useEffect(() => {
    const fetchWaterLevel = async () => {
      try {
        const res = await axios.get('http://localhost:5000/waterLevelData');
        setWaterLevel(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWaterLevel();
  }, []);

  // Convert fetched data to chart format
  const chartData = {
    labels: waterLevel.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'Water Level Value',
        data: waterLevel.map((data) => data.water_level),
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
                <Th>Water Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {waterLevel && waterLevel.length > 0 ? (
                waterLevel.map((waterLevel) => (
                  <Tr key={waterLevel.id}>
                    <Td>{waterLevel?.water_level}</Td>
                    <Td>{waterLevel?.time_stamp}</Td>
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
          <Input variant="outline" placeholder="Enter desired water level here" />
          <Button>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
}

waterLevelTable.propTypes = {};
export default waterLevelTable;
