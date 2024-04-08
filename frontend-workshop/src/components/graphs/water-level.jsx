import React, { useEffect, useState } from 'react';
import {
  Divider,
  Flex,
  Grid,
} from '@chakra-ui/react';

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function WaterLevelGraph() {
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
      <Divider orientation="vertical" w="2vw" />
      <Grid justify="center" minW="100%">
          <Line data={chartData} />
          <Divider />
      </Grid>
    </Flex>
  );
}

WaterLevelGraph.propTypes = {};
export default WaterLevelGraph;