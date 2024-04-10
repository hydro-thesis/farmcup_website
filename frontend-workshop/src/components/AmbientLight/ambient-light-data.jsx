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
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('ambientGet.php')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Convert fetched data to chart format
  // const chartData = {
  //   labels: ambientLight.map((data) => data.time_stamp),
  //   datasets: [
  //     {
  //       label: 'Ambient Light Value',
  //       data: ambientLight.map((data) => data.ambient_light),
  //       fill: false,
  //       borderColor: '#48BB78',
  //       tension: 0.1
  //     }
  //   ]
  // };
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
              {data && data.length > 0 ? (
                data.map((data) => (
                  <Tr key={data.id}>
                    <Td>{data?.ambient_light}</Td>
                    <Td>{data?.time_stamp}</Td>
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
          {/* <Line data={chartData} /> */}
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
