import React from "react";
import PropTypes from "prop-types";
import { Flex, Table, TableContainer, Th, Tr } from "@chakra-ui/react";
import { TableHead } from "@mui/material";

const pHLevelTable = () => {
  return (
    <Flex justify="center">
      <TableContainer maxH="75vh">
        <Table minW="50vw">
          <TableHead>
            <Tr>
              <Th textAlign="center">pH Level</Th>
              <Th textAlign="center">Time Stamp</Th>
            </Tr>
          </TableHead>
        </Table>
      </TableContainer>
    </Flex>
  );
};

pHLevelTable.propTypes = {};

export default pHLevelTable;
