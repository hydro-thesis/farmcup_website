import React from "react";
import PropTypes from "prop-types";
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const pHLevelTable = ({ userData }) => {
  return (
    <Flex justify="center">
      <TableContainer maxH="75vh">
        <Table minW="50vw" textAlign="center">
          <Thead>
            <Tr>
              <Th>pH Level</Th>
              <Th>Time Stamp</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData && userData.length > 0 ? (
              userData.map((ph, id) => (
                <Tr key={`pH-${id}`}>
                  <Td>{ph?.pH}</Td>
                  <Td>{ph?.year}</Td>
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

pHLevelTable.propTypes = { userData: PropTypes.array };

export default pHLevelTable;
