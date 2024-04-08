import React, { useEffect, useState } from 'react';
import {
  Divider,
  Flex,
  Grid,
} from '@chakra-ui/react';

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function AmbientTemperatureGraph() {
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
        borderColor: '#48BB78',
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

AmbientTemperatureGraph.propTypes = {};
export default AmbientTemperatureGraph;
