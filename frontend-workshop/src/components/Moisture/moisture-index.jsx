import React, { useState } from "react";
import PropTypes from "prop-types";
import MoistureTable from "./moisture-data";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { UserData } from "./Data";

const moistureIndex = () => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MoistureTable userData={UserData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

moistureIndex.propTypes = {};

export default moistureIndex;
