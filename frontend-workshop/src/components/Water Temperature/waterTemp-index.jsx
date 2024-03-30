import React, { userState } from "react";
import PropTypes from "prop-types";
import WaterTempTable from "./waterTemp-table";
import WaterTempGraph from "./waterTemp-graph";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { UserData } from "./Data";

const waterTempIndex = () => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Table</Tab>
        <Tab>Graph</Tab>
        <Tab>Control</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <WaterTempTable userData={UserData} />
        </TabPanel>
        <TabPanel>
          <WaterTempGraph />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

waterTempIndex.propTypes = {};

export default waterTempIndex;