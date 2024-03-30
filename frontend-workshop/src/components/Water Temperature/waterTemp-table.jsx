import React from "react";
import PropTypes from "prop-types";
import { Flex, Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";

const waterTempTable = () => {
  return (
    <Flex justify="center">
      <TableContainer maxH="75vh">
        <Table minW="50vw">
          <Thead>
            <Tr>
              <Th textAlign="center">Water Temperature</Th>
              <Th textAlign="center">Time Stamp</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </Flex>
  );
};

waterTempTable.propTypes = {};

export default waterTempTable;