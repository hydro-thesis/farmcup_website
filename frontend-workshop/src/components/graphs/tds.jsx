import React, { useEffect, useState } from 'react';
import {
  Divider,
  Flex,
  Grid,
  VStack
} from '@chakra-ui/react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function TDSLevelGraph() {
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
      <Divider orientation="vertical" w="2vw" />
      <Grid justify="center" minW="100%">
          <Line data={chartData} />
          <Divider />
      </Grid>
    </Flex>
  );
}

export default TDSLevelGraph;
