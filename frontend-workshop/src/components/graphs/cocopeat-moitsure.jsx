import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Flex,
  Grid,
  VStack
} from '@chakra-ui/react';

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function MoistureGraph() {
  const [moisture, setMoisture] = useState([]);

  useEffect(() => {
    const fetchmoisture = async () => {
      try {
        const res = await axios.get('http://localhost:5000/moistureData'); //axios to assign response to api endpoint "/moistureData"
        setMoisture(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchmoisture(); //run the const
    }, []);


  // Convert fetched data to chart format
  const chartData = {
    labels: moisture.map((data) => data.time_stamp), //time_stamp column in db
    datasets: [
      {
        label: 'Moisture Value',
        data: moisture.map((data) => data.moisture), //moisture column in db
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

MoistureGraph.propTypes = {};

export default MoistureGraph;
