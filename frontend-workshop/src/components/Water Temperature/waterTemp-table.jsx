import React from "react";
import PropTypes from "prop-types";
import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const waterTempTable = (userData) => {
  return (
    <Flex justify="center">
      <TableContainer maxH="75vh">
        <Table minW="50vw" textAlign={"center"}>
          <Thead>
            <Tr>
              <Th>Water Temperature</Th>
              <Th>Time Stamp</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData && userData.length > 0 ? (
              userData.map((waterTemp, id) => (
                <Tr key={`waterTemp-${id}`}>
                  <Td>{waterTemp?.waterTemp}</Td>
                  <Td>{waterTemp?.year}</Td>
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
  );
};

waterTempTable.propTypes = {};

export default waterTempTable;
