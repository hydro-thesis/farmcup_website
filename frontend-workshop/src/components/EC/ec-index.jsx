import React, { useState } from "react";
import PropTypes from "prop-types";
import ECTable from "./ec-data";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { UserData } from "./Data";

const ecIndex = () => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Data</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ECTable userData={UserData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

ecIndex.propTypes = {};

export default ecIndex;
