import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Input,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { UserData } from "./Data";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from 'axios'

const initialData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "EC Level",
      data: UserData.map((data) => data.EC),
    },
  ],
};

const TemperatureHumidityTable = ({ userData }) => {
  const [formData, setFormData] = useState({
    temperature: "",
    ph: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.post();
    console.log(formData);
  };

  return (
    <Flex justify="center">
      <Flex justify="center" minW="25vw">
        <TableContainer>
          <Table size="sm" minW="25vw" textAlign="center">
            <Thead>
              <Tr>
                <Th>EC Level</Th>
                <Th>Time Stamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData && userData.length > 0 ? (
                userData.map((EC, id) => (
                  <Tr key={`EC-${id}`}>
                    <Td>{EC?.EC}</Td>
                    <Td>{EC?.year}</Td>
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
          <Line data={initialData} />
          <Divider />
          <Input
            type="text"
            variant="outline"
            name="temperature"
            value={formData.temperature}
            placeholder="Input Temperature"
            onChange={handleChange}
          />
          <Input
            type="text"
            variant="outline"
            name="ph"
            value={formData.ph}
            placeholder="Input PH"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Update</Button>
        </VStack>
      </Grid>
    </Flex>
  );
};

TemperatureHumidityTable.propTypes = { userData: PropTypes.array };

export default TemperatureHumidityTable;
