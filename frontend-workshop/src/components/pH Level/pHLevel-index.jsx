import React, { useState } from "react";
import PropTypes from "prop-types";
import PHLevelTable from "./pH-table";
import PHLevelGraph from "./pH-graph";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { UserData } from "./Data";

const pHLevelIndex = () => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Table</Tab>
        <Tab>Graph</Tab>
        <Tab>Control</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <PHLevelTable userData={UserData} />
        </TabPanel>
        <TabPanel>
          <PHLevelGraph />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

pHLevelIndex.propTypes = {};

export default pHLevelIndex;
