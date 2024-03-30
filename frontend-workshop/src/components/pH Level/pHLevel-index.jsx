import React, { useState } from "react";
import PropTypes from "prop-types";
import PHLevelTable from "./pH-data";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { UserData } from "./Data";

const pHLevelIndex = () => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <PHLevelTable userData={UserData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

pHLevelIndex.propTypes = {};

export default pHLevelIndex;
