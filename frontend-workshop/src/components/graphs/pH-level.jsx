import React, { useEffect, useState } from 'react';
import {
  Divider,
  Flex,
  Grid,
} from '@chakra-ui/react';

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function PHLevelGraph() {
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

PHLevelGraph.propTypes = {};
export default PHLevelGraph;