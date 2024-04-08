import React, { useEffect, useState } from 'react';
import {
  Divider,
  Flex,
  Grid,
} from '@chakra-ui/react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function AmbientHumidityGraph() {
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
  const humidityData = humidity.slice(-20).reverse();
  const chartData = {
    labels: humidityData.map((data) => data.time_stamp),
    datasets: [
      {
        label: 'Humidity Value',
        data: humidityData.map((data) => data.humidity),
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

AmbientHumidityGraph.propTypes = {};
export default AmbientHumidityGraph;