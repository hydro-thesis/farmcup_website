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

function AmbientGraph() {
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
      <Divider orientation="vertical" w="2vw" />
      <Grid justify="center" minW="100%">
          <Line data={chartData} />
          <Divider />
      </Grid>
    </Flex>
  );
}

AmbientGraph.propTypes = {};

export default AmbientGraph;
