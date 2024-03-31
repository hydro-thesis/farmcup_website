import React, { useState } from "react";
import PropTypes from "prop-types";
import TemperatureTable from './temperature-table'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { UserData } from "./Data";


const temperatureHumidityIndex = () => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TemperatureTable userData={UserData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default temperatureHumidityIndex;
