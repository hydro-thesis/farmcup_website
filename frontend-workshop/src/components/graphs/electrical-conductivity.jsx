import React, { useEffect, useState } from 'react';
import {
  Divider,
  Flex,
  Grid,
} from '@chakra-ui/react';

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function ECLevelGraph() {
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
      <Divider orientation="vertical" w="2vw" />
      <Grid justify="center" minW="100%">
          <Line data={chartData} />
          <Divider />
      </Grid>
    </Flex>
  );
}

ECLevelGraph.propTypes = {};
export default ECLevelGraph;
